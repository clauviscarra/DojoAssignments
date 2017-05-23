from django.shortcuts import render, redirect
from datetime import datetime

def index(request):
  context = {
  "time": datetime.now().strftime("%b %d, %Y %I:%M %p")
  }

  return render(request,'time_app/index.html', context)
# Create your views here.
