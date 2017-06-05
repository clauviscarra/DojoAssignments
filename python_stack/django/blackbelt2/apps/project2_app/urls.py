from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.quotes),
    url(r'^makequote$', views.makequote),
    url(r'^favequote/(?P<quote_id>\d+)$', views.favequote),
    url(r'^remove_quote$', views.remove_quote),
    url(r'^userinfo/(?P<created_by>[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)$', views.userinfo)
    ]
