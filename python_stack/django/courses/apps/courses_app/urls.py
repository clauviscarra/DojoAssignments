from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_course$', views.add_course),
    url(r'^reset/(?P<id_>\d+)$', views.reset),
    url(r'^destroy/(?P<id_>\d+)$', views.destroy)

]
