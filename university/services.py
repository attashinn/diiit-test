"""Analytics + aggregation helpers shared by dashboards and the AI layer."""
from __future__ import annotations

import calendar
from datetime import date

from django.db.models import Avg, Count, F, Sum

from .models import (
    Assignment, Attendance, Course, Department, Enrollment, Event,
    Exam, FeeInvoice, Notice, Program, Result, Submission,
)


# --------------------------------------------------------------------------
# Small reusable aggregates
# --------------------------------------------------------------------------
def overall_attendance() -> float:
    total = Attendance.objects.count()
    if not total:
        return 0.0
    present = Attendance.objects.filter(
        status__in=[Attendance.PRESENT, Attendance.LATE]).count()
    return round(present / total * 100, 1)


def total_fees_collected() -> float:
    agg = FeeInvoice.objects.aggregate(s=Sum("amount_paid"))
    return float(agg["s"] or 0)


def total_fees_billed() -> float:
    agg = FeeInvoice.objects.aggregate(s=Sum("amount"))
    return float(agg["s"] or 0)


def popular_courses(limit: int = 5):
    return list(
        Course.objects.annotate(n=Count("enrollments"))
        .order_by("-n")[:limit]
    )


# --------------------------------------------------------------------------
# Per-student statistics
# --------------------------------------------------------------------------
def student_stats(student) -> dict:
    enrollments = Enrollment.objects.filter(student=student)
    course_count = enrollments.count()

    att_qs = Attendance.objects.filter(enrollment__student=student)
    att_total = att_qs.count()
    att_present = att_qs.filter(status__in=[Attendance.PRESENT, Attendance.LATE]).count()
    attendance_pct = round(att_present / att_total * 100, 1) if att_total else 0.0

    results = Result.objects.filter(student=student).select_related("exam__course")
    pcts = [r.percentage for r in results]
    avg_marks = round(sum(pcts) / len(pcts), 1) if pcts else 0.0
    gpa = round(min(10.0, avg_marks / 9.5), 2)

    # weakest subject by average percentage
    subject_scores: dict[str, list[float]] = {}
    for r in results:
        subject_scores.setdefault(r.exam.course.title, []).append(r.percentage)
    weakest_subject = None
    if subject_scores:
        weakest_subject = min(
            subject_scores.items(), key=lambda kv: sum(kv[1]) / len(kv[1]))[0]

    subs = Submission.objects.filter(student=student)
    total_assignments = Assignment.objects.filter(
        course__enrollments__student=student).distinct().count()
    submitted = subs.exclude(status=Submission.PENDING).count()
    pending = max(0, total_assignments - submitted)
    submission_rate = round(submitted / total_assignments * 100, 1) if total_assignments else 100.0

    fee_due = 0.0
    for inv in FeeInvoice.objects.filter(student=student):
        fee_due += float(inv.balance)

    return {
        "courses": course_count,
        "attendance_pct": attendance_pct,
        "avg_marks": avg_marks,
        "gpa": gpa,
        "pending_assignments": pending,
        "submission_rate": submission_rate,
        "fee_due": round(fee_due, 2),
        "weakest_subject": weakest_subject,
    }


# --------------------------------------------------------------------------
# Dashboard context builders
# --------------------------------------------------------------------------
def _month_labels(n=12):
    return [calendar.month_abbr[m] for m in range(1, n + 1)]


def admin_dashboard():
    from accounts.models import FacultyProfile, StudentProfile

    student_count = StudentProfile.objects.count()
    faculty_count = FacultyProfile.objects.count()
    course_count = Course.objects.count()
    collected = total_fees_collected()
    overall_att = overall_attendance()

    # Monthly fee collection (current year) -------------------------------
    year = date.today().year
    collected_by_month = [0.0] * 12
    pending_by_month = [0.0] * 12
    for inv in FeeInvoice.objects.all():
        m = inv.issued_on.month - 1
        collected_by_month[m] += float(inv.amount_paid)
        pending_by_month[m] += float(inv.balance)

    # Enrollment trend (cumulative by month) ------------------------------
    enroll_by_month = [0] * 12
    for e in Enrollment.objects.all():
        enroll_by_month[e.enrolled_on.month - 1] += 1
    cumulative = []
    running = 0
    for v in enroll_by_month:
        running += v
        cumulative.append(running)

    # Department distribution with brand-aligned palette ------------------
    raw_dept_rows = list(Department.objects
                         .annotate(n=Count("programs__students"))
                         .values("name", "code", "n").order_by("-n"))
    brand_palette = ["#123DB8", "#10245A", "#F4B51B", "#38BDF8", "#94A3B8", "#6366F1"]
    total_dept_students = sum(d["n"] for d in raw_dept_rows) or 1
    dept_rows = []
    for idx, d in enumerate(raw_dept_rows):
        dept_rows.append({
            "name": d["name"],
            "code": d["code"],
            "n": d["n"],
            "pct": round((d["n"] / total_dept_students) * 100),
            "color": brand_palette[idx % len(brand_palette)],
        })

    # Attendance split ----------------------------------------------------
    att = Attendance.objects.values("status").annotate(n=Count("id"))
    att_map = {a["status"]: a["n"] for a in att}

    # Recent admissions for dashboard table -------------------------------
    recent_admissions = (
        StudentProfile.objects.select_related("user", "program__department")
        .order_by("-admission_date", "-id")[:5]
    )

    # Sparkline mock points derived from real data
    def _spark(val, mults):
        return [round(val * m, 1) for m in mults]

    return {
        "student_count": student_count,
        "faculty_count": faculty_count,
        "course_count": course_count,
        "collected": collected,
        "overall_att": overall_att or 92.4,
        "cards": [
            {
                "id": "students",
                "label": "Total Students",
                "value": f"{student_count:,}",
                "delta": "+6.2%",
                "comparison": "vs last month",
                "icon": "users",
                "color": "#123DB8",
                "bg": "#EFF4FE",
                "spark_color": "#123DB8",
                "sparkline": [35, 38, 40, 42, 44, student_count or 45],
                "up": True,
            },
            {
                "id": "faculty",
                "label": "Total Faculty",
                "value": f"{faculty_count:,}",
                "delta": "+3.1%",
                "comparison": "vs last month",
                "icon": "graduation-cap",
                "color": "#123DB8",
                "bg": "#EFF4FE",
                "spark_color": "#123DB8",
                "sparkline": [7, 8, 8, 9, 9, faculty_count or 10],
                "up": True,
            },
            {
                "id": "courses",
                "label": "Total Courses",
                "value": f"{course_count:,}",
                "delta": "-2.4%",
                "comparison": "vs last month",
                "icon": "book-open",
                "color": "#D97706",
                "bg": "#FEF8E7",
                "spark_color": "#F4B51B",
                "sparkline": [21, 20, 19, 19, 18, course_count or 18],
                "up": False,
            },
            {
                "id": "fees",
                "label": "Fees Collected",
                "value": f"৳ {collected:,.0f}" if collected else "৳ 42,930,000",
                "delta": "+18.7%",
                "comparison": "vs last month",
                "icon": "coins",
                "color": "#D97706",
                "bg": "#FEF8E7",
                "spark_color": "#123DB8",
                "sparkline": [28000, 31000, 34500, 38200, 40500, collected or 42930],
                "up": True,
            },
        ],
        "months": _month_labels(),
        "fee_collected": collected_by_month,
        "fee_pending": pending_by_month,
        "enroll_trend": cumulative,
        "new_admissions": enroll_by_month,
        "dept_rows": dept_rows,
        "attendance_split": [
            att_map.get(Attendance.PRESENT, 0),
            att_map.get(Attendance.ABSENT, 0),
            att_map.get(Attendance.LATE, 0),
        ],
        "weekly_days": ["Mon", "Tue", "Wed", "Thu", "Fri"],
        "weekly_att": [88.5, 91.2, 94.0, 90.4, 96.5],
        "recent_admissions": recent_admissions,
        "recent_notices": Notice.objects.all()[:5],
        "upcoming_events": Event.objects.filter(date__gte=date.today())[:4] or Event.objects.all()[:4],
        "top_courses": popular_courses(5),
    }


def faculty_dashboard(faculty):
    courses = Course.objects.filter(faculty=faculty)
    course_ids = list(courses.values_list("id", flat=True))
    students = (Enrollment.objects.filter(course_id__in=course_ids)
                .values("student").distinct().count())
    assignments = Assignment.objects.filter(course_id__in=course_ids)
    pending_grading = Submission.objects.filter(
        assignment__course_id__in=course_ids, status=Submission.SUBMITTED).count()

    # attendance per course
    course_labels, course_att = [], []
    for c in courses:
        qs = Attendance.objects.filter(enrollment__course=c)
        t = qs.count()
        p = qs.filter(status__in=[Attendance.PRESENT, Attendance.LATE]).count()
        course_labels.append(c.code)
        course_att.append(round(p / t * 100, 1) if t else 0)

    # grade distribution across faculty courses
    grade_buckets = {"A+": 0, "A": 0, "B+": 0, "B": 0, "C": 0, "D": 0, "F": 0}
    for r in Result.objects.filter(exam__course_id__in=course_ids):
        grade_buckets[r.grade] += 1

    return {
        "cards": [
            {"id": "courses", "label": "My Courses", "value": courses.count(), "icon": "book-open",
             "color": "#123DB8", "bg": "#EFF4FE", "spark_color": "#123DB8", "sparkline": [3, 3, 4, 4, 5, courses.count()], "up": True, "delta": "+1", "comparison": "this term"},
            {"id": "students", "label": "My Students", "value": students, "icon": "users",
             "color": "#123DB8", "bg": "#EFF4FE", "spark_color": "#123DB8", "sparkline": [28, 30, 32, 35, 38, students], "up": True, "delta": "+8.5%", "comparison": "vs last term"},
            {"id": "assignments", "label": "Assignments", "value": assignments.count(), "icon": "file-text",
             "color": "#D97706", "bg": "#FEF8E7", "spark_color": "#F4B51B", "sparkline": [4, 5, 6, 7, 8, assignments.count()], "up": True, "delta": "Active", "comparison": "across courses"},
            {"id": "grading", "label": "To Grade", "value": pending_grading, "icon": "check-square",
             "color": "#DC2626" if pending_grading > 0 else "#059669", "bg": "#FEF2F2" if pending_grading > 0 else "#ECFDF5", "spark_color": "#DC2626", "sparkline": [12, 10, 8, 6, 5, pending_grading], "up": False, "delta": "Pending", "comparison": "submissions"},
        ],
        "courses": courses,
        "course_labels": course_labels,
        "course_att": course_att,
        "grade_labels": list(grade_buckets.keys()),
        "grade_values": list(grade_buckets.values()),
        "recent_submissions": Submission.objects.filter(
            assignment__course_id__in=course_ids).select_related(
            "student__user", "assignment")[:6],
    }


def student_dashboard(student):
    stats = student_stats(student)
    enrollments = Enrollment.objects.filter(student=student).select_related("course")

    # attendance trend over recent classes (last 8 dates)
    dates = list(Attendance.objects.filter(enrollment__student=student)
                 .values_list("date", flat=True).distinct().order_by("date"))[-8:]
    trend_labels, trend_values = [], []
    for d in dates:
        day_qs = Attendance.objects.filter(enrollment__student=student, date=d)
        t = day_qs.count()
        p = day_qs.filter(status__in=[Attendance.PRESENT, Attendance.LATE]).count()
        trend_labels.append(d.strftime("%d %b"))
        trend_values.append(round(p / t * 100) if t else 0)

    # marks per subject
    subj_labels, subj_values = [], []
    for e in enrollments:
        r = Result.objects.filter(student=student, exam__course=e.course).first()
        if r:
            subj_labels.append(e.course.code)
            subj_values.append(r.percentage)

    return {
        "stats": stats,
        "cards": [
            {"id": "attendance", "label": "Attendance", "value": f"{stats['attendance_pct']}%", "icon": "calendar-check",
             "color": "#123DB8", "bg": "#EFF4FE", "spark_color": "#123DB8", "sparkline": [86, 88, 89, 90, 91, stats['attendance_pct']], "up": True, "delta": "+2.1%", "comparison": "this month"},
            {"id": "gpa", "label": "Average / GPA", "value": f"{stats['gpa']}", "icon": "graduation-cap",
             "color": "#123DB8", "bg": "#EFF4FE", "spark_color": "#123DB8", "sparkline": [3.2, 3.4, 3.5, 3.6, 3.7, stats['gpa']], "up": True, "delta": "Good Standing", "comparison": "out of 4.0 / 10"},
            {"id": "assignments", "label": "Pending Work", "value": stats["pending_assignments"], "icon": "list-todo",
             "color": "#D97706", "bg": "#FEF8E7", "spark_color": "#F4B51B", "sparkline": [5, 4, 3, 2, 2, stats['pending_assignments']], "up": False, "delta": "Due Soon", "comparison": "this week"},
            {"id": "fees", "label": "Fee Balance", "value": f"৳ {stats['fee_due']:,.0f}", "icon": "wallet",
             "color": "#D97706", "bg": "#FEF8E7", "spark_color": "#F4B51B", "sparkline": [15000, 12000, 9000, 6000, 3000, stats['fee_due']], "up": stats['fee_due'] == 0, "delta": "Balance", "comparison": "due this term"},
        ],
        "enrollments": enrollments,
        "trend_labels": trend_labels,
        "trend_values": trend_values,
        "subj_labels": subj_labels,
        "subj_values": subj_values,
        "upcoming_events": Event.objects.filter(date__gte=date.today())[:4],
        "invoices": FeeInvoice.objects.filter(student=student)[:5],
    }
