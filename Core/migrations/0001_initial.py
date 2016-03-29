# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('modify_time', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(default='', max_length=30)),
                ('content', models.TextField(default='', null=True, blank=True)),
                ('money', models.FloatField(default=0.0)),
                ('picture', models.CharField(default='', max_length=128, null=True, blank=True)),
                ('status', models.IntegerField(default=1)),
                ('link', models.CharField(default='', max_length=256, null=True, blank=True)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Requester',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(default=django.utils.timezone.now, verbose_name='last login')),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('modify_time', models.DateTimeField(auto_now=True)),
                ('account', models.CharField(default='', unique=True, max_length=13)),
                ('name', models.CharField(default='', max_length=30)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='appointment',
            name='belong',
            field=models.ForeignKey(related_name='user_appos', on_delete=django.db.models.deletion.SET_NULL, to='Core.Requester', null=True),
            preserve_default=True,
        ),
    ]
