from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),
    url(r'^submission$', views.submission),
    url(r'^results$', views.results),
    url(r'^reset$', views.reset)
 # This line has changed!
  ]
