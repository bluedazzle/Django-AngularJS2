from django.conf.urls import patterns, include, url
from Core.views import index

urlpatterns = patterns('',
    url(r'^$', index),
)
