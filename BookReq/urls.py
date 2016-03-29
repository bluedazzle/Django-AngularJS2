from django.conf.urls import patterns, include, url
from django.contrib import admin

from BookReq import settings

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'BookReq.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('Core.urls')),
    url(r'^css/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.CSS_DIR}),
    url(r'^js/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.JS_DIR}),
    url(r'^font/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.FONT_DIR}),
    url(r'^node_modules/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.NODE_DIR}),
    url(r'^app/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.APP_DIR}),
    url(r'^templates/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.TEMP_DIR}),
    url(r'^angular2/(?P<path>.*)$', 'BookReq.utils.serve', {'document_root': settings.NG_DIR}),
)
