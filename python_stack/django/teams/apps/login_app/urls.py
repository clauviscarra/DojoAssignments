from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),
    url(r'^login$', views.login),
    url(r'^register$', views.register_page),
    url(r'^register_process$', views.register_process),
    url(r'^success$', views.success)
 # This line has changed!
  ]
