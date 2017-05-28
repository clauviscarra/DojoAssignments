from django.shortcuts import render, redirect
from .models import Team, User_Team, User
from django.contrib import messages

def success(request):
    context ={
    "all_users":User_Team.objects.all(),
    "all_teams":Team.objects.all(),
    'user_teams':User_Team.objects.all()
    }

    return render(request,'teams_app/success.html', context)
# Create your views here.
def create(request):
    team_result = Team.objects.make_team(request.POST)

    if team_result[0]:
        return redirect ('/success')

    else:
        for i in team_result[1]:
            messages.info(request,i)
        return redirect ('/success')
