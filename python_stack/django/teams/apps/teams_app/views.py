from django.shortcuts import render, redirect
from .models import Team, User_Team, User
from django.contrib import messages
from sets import Set

def success(request):
    a = set(Team.objects.all())
    b= set(Team.objects.filter(team_name__user__email=request.session['user_email']))
    excluded_teams = (a.difference(b))



    context ={
    "all_teams":Team.objects.all(),
    'user_teams':User_Team.objects.filter(user__email = request.session['user_email']),
    # "some_teams":Team.objects.all(),
    "excluded_teams": excluded_teams
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
def join_team(request):
    result_join_team = Team.objects.join_team(request.POST)


    t1 = Team.objects.filter(id = request.POST['team_name'])
    u1 = User.objects.filter(email = request.session['user_email'])

    team_join = User_Team.objects.create(user=u1[0], team=t1[0])
    return redirect ('/success')


def team_info(request):

    team_info_save = request.POST['view_info']

    context ={

    'all_users':User.objects.filter(email = request.session['user_email']),
    'user_teams':User_Team.objects.filter(team__name=team_info_save),
    # 'user_in_team':User_Team.objects.filter(id=team_info_save)

    }

    return render (request,'teams_app/team_info.html', context)

def view_users(request,last_name):
    context={
    'user_info': User_Team.objects.filter(user__last_name=last_name),
    'name':User.objects.filter(last_name=last_name)
    }


    return render(request,'teams_app/user_info.html', context)
