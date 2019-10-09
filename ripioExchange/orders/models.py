from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Order(models.Model):
    price = models.FloatField()
    amount = models.FloatField()
    total = models.FloatField()
    status = models.CharField(max_length=50, null=True)
    owner = models.ForeignKey(User, related_name= "orders", on_delete= models.CASCADE,null=True)
    orderType =  models.CharField(max_length=50, null=True)
    pair = models.CharField(max_length=50,null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

