# Generated by Django 5.0.6 on 2024-07-04 06:03

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recruit', '0006_jobdesc'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Recruit',
            new_name='Resume',
        ),
    ]