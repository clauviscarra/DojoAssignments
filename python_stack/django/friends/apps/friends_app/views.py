from django.shortcuts import render, redirect

from .models import Person, JoinFriends

def index(request):
    context = {
    'item': Person.objects.all(),
    'all_friends': JoinFriends.objects.all()
    }
    return render(request, 'friends_app/index.html', context)

def create_user(request):
    Person.objects.create(name=request.POST['new_friend'])
    return redirect ('/')

def join_friends(request):
    f1 = Person.objects.filter(id = request.POST['friend_1'])
    f2 = Person.objects.filter(id = request.POST['friend_2'])

    friendship = JoinFriends.objects.create(person_1=f1[0], person_2=f2[0])
    return redirect ('/')

# Create your views here.
