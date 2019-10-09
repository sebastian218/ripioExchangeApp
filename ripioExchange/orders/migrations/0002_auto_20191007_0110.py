# Generated by Django 2.2.5 on 2019-10-07 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='types',
        ),
        migrations.AddField(
            model_name='order',
            name='orderType',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='pair',
            field=models.CharField(max_length=50, null=True),
        ),
    ]