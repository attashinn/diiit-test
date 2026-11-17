from django import template
from django.utils.safestring import mark_safe

register = template.Library()


@register.filter
def get_item(mapping, key):
    """Look up a value in a dict by key inside templates."""
    if hasattr(mapping, "get"):
        return mapping.get(key)
    return None


@register.filter
def pct_bar(value):
    try:
        return min(100, max(0, float(value)))
    except (TypeError, ValueError):
        return 0


@register.simple_tag
def sparkline_svg(data, color="#123DB8", width=70, height=28):
    """Render a smooth SVG sparkline path from a list of numbers."""
    if not data or not isinstance(data, (list, tuple)) or len(data) < 2:
        # Fallback subtle wave
        return mark_safe(
            f'<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none">'
            f'<path d="M 0 20 Q 20 5 35 15 T 70 8" stroke="{color}" stroke-width="2" stroke-linecap="round" fill="none"/>'
            f'</svg>'
        )

    try:
        nums = [float(x) for x in data]
        min_v = min(nums)
        max_v = max(nums)
        spread = max_v - min_v if max_v != min_v else 1.0

        pts = []
        n = len(nums)
        for i, val in enumerate(nums):
            x = round((i / (n - 1)) * (width - 4) + 2, 1)
            # Invert Y coordinate with 4px padding top and bottom
            y = round((height - 6) - ((val - min_v) / spread) * (height - 12) + 2, 1)
            pts.append((x, y))

        # Build smooth path
        d = f"M {pts[0][0]} {pts[0][1]}"
        for i in range(1, len(pts)):
            prev = pts[i - 1]
            curr = pts[i]
            mid_x = (prev[0] + curr[0]) / 2
            d += f" C {mid_x} {prev[1]}, {mid_x} {curr[1]}, {curr[0]} {curr[1]}"

        return mark_safe(
            f'<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" class="stat-sparkline">'
            f'<path d="{d}" stroke="{color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
            f'</svg>'
        )
    except Exception:
        return mark_safe(
            f'<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none">'
            f'<path d="M 0 20 Q 20 8 35 16 T 70 6" stroke="{color}" stroke-width="2" stroke-linecap="round" fill="none"/>'
            f'</svg>'
        )

