from __future__ import unicode_literals

from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=45)
    description = models.CharField(max_length=45)
    weight = models.IntegerField()
    price = models.FloatField()
    cost = models.IntegerField(default=1900)

# Create your models here.
