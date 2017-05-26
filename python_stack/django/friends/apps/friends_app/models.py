from __future__ import unicode_literals

from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class JoinFriends(models.Model):
    person_1=models.ForeignKey(Person, related_name='person1')
    person_2=models.ForeignKey(Person, related_name='person2')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



# Create your models here.
