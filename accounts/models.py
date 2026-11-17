from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse


class Role(models.TextChoices):
    ADMIN = "ADMIN", "Administrator"
    FACULTY = "FACULTY", "Faculty"
    STUDENT = "STUDENT", "Student"


# Per-role UI theme (aligned with the official university brand identity).
ROLE_THEMES = {
    Role.ADMIN: {
        "key": "admin",
        "name": "Administrator",
        "primary": "#123DB8",
        "primary_dark": "#10245A",
        "accent": "#F4B51B",
        "sidebar": "#FFFFFF",
        "surface": "#F7F8FA",
        "gradient": "linear-gradient(135deg,#123DB8 0%,#10245A 100%)",
        "icon": "fa-user-shield",
    },
    Role.FACULTY: {
        "key": "faculty",
        "name": "Faculty",
        "primary": "#123DB8",
        "primary_dark": "#10245A",
        "accent": "#F4B51B",
        "sidebar": "#FFFFFF",
        "surface": "#F7F8FA",
        "gradient": "linear-gradient(135deg,#123DB8 0%,#10245A 100%)",
        "icon": "fa-chalkboard-user",
    },
    Role.STUDENT: {
        "key": "student",
        "name": "Student",
        "primary": "#123DB8",
        "primary_dark": "#10245A",
        "accent": "#F4B51B",
        "sidebar": "#FFFFFF",
        "surface": "#F7F8FA",
        "gradient": "linear-gradient(135deg,#123DB8 0%,#10245A 100%)",
        "icon": "fa-user-graduate",
    },
}


class User(AbstractUser):
    role = models.CharField(max_length=10, choices=Role.choices, default=Role.STUDENT)
    phone = models.CharField(max_length=20, blank=True, default="0000")
    avatar_url = models.URLField(blank=True)

    @property
    def theme(self):
        return ROLE_THEMES.get(self.role, ROLE_THEMES[Role.STUDENT])

    @property
    def is_admin_role(self):
        return self.role == Role.ADMIN

    @property
    def is_faculty(self):
        return self.role == Role.FACULTY

    @property
    def is_student(self):
        return self.role == Role.STUDENT

    @property
    def display_name(self):
        return self.get_full_name() or self.username

    @property
    def avatar(self):
        if self.avatar_url:
            return self.avatar_url
        seed = (self.display_name or self.username).replace(" ", "+")
        colors = {"ADMIN": "123DB8", "FACULTY": "10245A", "STUDENT": "123DB8"}
        bg = colors.get(self.role, "123DB8")
        return f"https://ui-avatars.com/api/?name={seed}&background={bg}&color=fff&bold=true"

    def __str__(self):
        return f"{self.display_name} ({self.get_role_display()})"


class StudentProfile(models.Model):
    GENDER = [("M", "Male"), ("F", "Female"), ("O", "Other")]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="student_profile")
    roll_no = models.CharField(max_length=20, unique=True)
    program = models.ForeignKey("university.Program", on_delete=models.SET_NULL,
                                null=True, blank=True, related_name="students")
    current_semester = models.PositiveSmallIntegerField(default=1)
    gender = models.CharField(max_length=1, choices=GENDER, default="O")
    date_of_birth = models.DateField(null=True, blank=True)
    admission_date = models.DateField(null=True, blank=True)
    address = models.CharField(max_length=255, blank=True, default="Campus Hostel Block")
    guardian_name = models.CharField(max_length=120, blank=True, default="Guardian")

    class Meta:
        ordering = ["roll_no"]

    def get_absolute_url(self):
        return reverse("university:student_detail", args=[self.pk])

    def __str__(self):
        return f"{self.roll_no} - {self.user.display_name}"


class FacultyProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="faculty_profile")
    employee_id = models.CharField(max_length=20, unique=True)
    department = models.ForeignKey("university.Department", on_delete=models.SET_NULL,
                                   null=True, blank=True, related_name="faculty")
    designation = models.CharField(max_length=80, default="Assistant Professor")
    specialization = models.CharField(max_length=120, blank=True, default="")
    joining_date = models.DateField(null=True, blank=True)

    class Meta:
        ordering = ["employee_id"]

    def get_absolute_url(self):
        return reverse("university:faculty_detail", args=[self.pk])

    def __str__(self):
        return f"{self.employee_id} - {self.user.display_name}"
