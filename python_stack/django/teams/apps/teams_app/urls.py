from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^success$', views.success),
    url(r'^create$', views.create)
 # This line has changed!
  ]
