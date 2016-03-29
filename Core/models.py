# coding: utf-8
from __future__ import unicode_literals

from django.contrib.auth.models import AbstractBaseUser
from django.db import models

# Create your models here.

class BaseModel(models.Model):
    create_time = models.DateTimeField(auto_now_add=True)
    modify_time = models.DateTimeField(auto_now=True)

    class Meta:
            abstract = True


class Requester(AbstractBaseUser, BaseModel):
    account = models.CharField(max_length=13, unique=True, default='')
    name = models.CharField(max_length=30, default='')

    def __unicode__(self):
        return self.account


class Appointment(BaseModel):
    status_choice = {
        (1, '待审核'),
        (2, '已通过'),
        (3, '已完成'),
        (4, '未通过'),
        (5, '已撤销')
    }

    title = models.CharField(max_length=30, default='')
    content = models.TextField(default='', null=True, blank=True)
    money = models.FloatField(default=0.0)
    belong = models.ForeignKey(Requester, related_name='user_appos', on_delete=models.SET_NULL, null=True)
    picture = models.CharField(max_length=128, default='', null=True, blank=True)
    status = models.IntegerField(default=1)
    link = models.CharField(max_length=256, default='', null=True, blank=True)

    def __unicode__(self):
        return self.title