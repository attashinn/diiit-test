#!/usr/bin/env bash
# Exit on error
set -o errexit

python -m pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate

# Automatically populate initial data if database is fresh
python manage.py shell -c "
from accounts.models import User
if not User.objects.filter(username='admin').exists():
    from django.core.management import call_command
    print('Seeding demo database for first run...')
    call_command('seed_demo')
"
