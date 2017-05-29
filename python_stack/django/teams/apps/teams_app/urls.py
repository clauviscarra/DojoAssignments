from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^success$', views.success),
    url(r'^create$', views.create),
    url(r'^join_team$', views.join_team),
    url(r'^team_info$', views.team_info),
    url(r'^users/(?P<last_name>\w+)$', views.view_users)
 # This line has changed!
  ]
