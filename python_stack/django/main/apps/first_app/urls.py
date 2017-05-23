from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^first_app$', views.index)

  ]
