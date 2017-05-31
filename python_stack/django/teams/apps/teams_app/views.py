from django.shortcuts import render, redirect
from .models import Team, User_Team, User
from django.contrib import messages
from sets import Set
from django.db.models import Sum, Count

def success(request):
    a = set(Team.objects.all().order_by('name'))
    b= set(Team.objects.filter(team_name__user__email=request.session['user_email']).order_by('name'))
    excluded_teams = (a.difference(b))



    context ={
    "all_teams":Team.objects.all(),
    'user_teams':User_Team.objects.filter(user__email = request.session['user_email']).order_by('team'),
    # "some_teams":Team.objects.all(),
    "excluded_teams": excluded_teams
    }

    return render(request,'teams_app/success.html', context)


def create(request):
    team_result = Team.objects.make_team(request.POST)

    if team_result[0]:
        return redirect ('/success')

    else:
        for i in team_result[1]:
            messages.info(request,i)
        return redirect ('/success')

def join_team(request):

    t1 = Team.objects.filter(id = request.POST['team_name'])
    u1 = User.objects.filter(email = request.session['user_email'])

    team_join = User_Team.objects.create(user=u1[0], team=t1[0])
    return redirect ('/success')


def team_info(request):

    team_info_save = request.POST['view_info']
    request.session['team_name'] = team_info_save
    context ={

    'all_users':User.objects.filter(email = request.session['user_email']),
    'user_teams':User_Team.objects.filter(team__name=team_info_save).order_by('user'),
    'total_teams':User_Team.objects.filter(team__name=team_info_save).count()

    }

    return render (request,'teams_app/team_info.html', context)

def view_users(request,last_name):
    context={
    'user_info': User_Team.objects.filter(user__last_name=last_name),
    'name':User.objects.filter(last_name=last_name)
    }


    return render(request,'teams_app/user_info.html', context)

def leave_team(request):
    User_Team.objects.filter(team__name=request.session['team_name']).filter(user__email=request.session['user_email']).delete()

    return redirect ('/success')
