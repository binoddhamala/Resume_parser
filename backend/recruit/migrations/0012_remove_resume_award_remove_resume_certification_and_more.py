# Generated by Django 5.0.6 on 2024-07-07 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recruit', '0011_remove_resume_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resume',
            name='award',
        ),
        migrations.RemoveField(
            model_name='resume',
            name='certification',
        ),
        migrations.AlterField(
            model_name='resume',
            name='degree',
            field=models.CharField(max_length=255),
        ),
        migrations.DeleteModel(
            name='Language',
        ),
        migrations.RemoveField(
            model_name='resume',
            name='previous_companies',
        ),
        migrations.AlterField(
            model_name='resume',
            name='worked_as',
            field=models.CharField(max_length=255),
        ),
        migrations.RemoveField(
            model_name='resume',
            name='skill',
        ),
        migrations.RemoveField(
            model_name='resume',
            name='university',
        ),
        migrations.RenameField(
            model_name='resume',
            old_name='graduation_year',
            new_name='companies',
        ),
        migrations.RemoveField(
            model_name='resume',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='resume',
            name='email_address',
        ),
        migrations.RemoveField(
            model_name='resume',
            name='language',
        ),
        migrations.RemoveField(
            model_name='resume',
            name='linked_link',
        ),
        migrations.AddField(
            model_name='resume',
            name='email',
            field=models.EmailField(default='Unknown', max_length=254),
        ),
        migrations.AddField(
            model_name='resume',
            name='linkedin',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='resume',
            name='skills',
            field=models.CharField(default=1, max_length=500),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Awards',
        ),
        migrations.DeleteModel(
            name='Certification',
        ),
        migrations.DeleteModel(
            name='Degree',
        ),
        migrations.DeleteModel(
            name='PreviousCompanies',
        ),
        migrations.DeleteModel(
            name='PreviousRole',
        ),
        migrations.DeleteModel(
            name='Skills',
        ),
        migrations.DeleteModel(
            name='University',
        ),
    ]
