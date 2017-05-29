from __future__ import unicode_literals

from django.db import models
from ..login_app.models import User

class UserManager(models.Manager):
    def make_team(self, team_data):
        flag = True
        errors = []

        if len(team_data['team_name']) < 1:
            flag = False
            errors.append('Please enter team name')

        if Team.objects.filter(name = team_data['team_name']):
            flag = False
            errors.append('Team already exists!')

        if flag:
            new_team = Team.objects.create(name=team_data['team_name'])
            print new_team
            return (True, new_team)
        else:
            return (False, errors)

    def join_team(self, join_data):
        flag = True
        errors = []

        if flag:
            return True
        else:
            return (False,errors)

class Team(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()
    def __str__(self):
        return self.name

class User_Team(models.Model):
    team = models.ForeignKey(Team, related_name = 'team_name')
    user  = models.ForeignKey(User, related_name='user_name')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



# Create your models here.
