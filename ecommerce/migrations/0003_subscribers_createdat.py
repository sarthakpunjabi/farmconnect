# Generated by Django 4.1.7 on 2023-03-30 20:09

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0002_subscribers'),
    ]

    operations = [
        migrations.AddField(
            model_name='subscribers',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
