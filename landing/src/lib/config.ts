/**
 * Centralized Configuration for DIET Portals and External Services.
 *
 * In local development: defaults to http://localhost:8000
 * In production: set NEXT_PUBLIC_PORTAL_URL in .env.local or your hosting environment (e.g. Vercel, cPanel)
 * to your live backend domain (e.g. https://portal.diet.ac or http://YOUR_SERVER_IP:8000).
 */

export const PORTAL_BASE_URL =
  process.env.NEXT_PUBLIC_PORTAL_URL?.replace(/\/$/, "") || "http://localhost:8000";

export const PORTAL_URLS = {
  base: PORTAL_BASE_URL,
  login: `${PORTAL_BASE_URL}/accounts/login/`,
  studentCourses: `${PORTAL_BASE_URL}/me/courses/`,
  teacherCourses: `${PORTAL_BASE_URL}/teach/courses/`,
  adminDashboard: `${PORTAL_BASE_URL}/dashboard/`,
  courses: `${PORTAL_BASE_URL}/courses/`,
};
