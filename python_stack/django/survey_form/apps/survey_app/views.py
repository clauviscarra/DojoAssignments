from django.shortcuts import render, redirect, HttpResponse

def index(request):
    if request.method == 'GET':
        request.session['total_count'] = 0
    else:
        pass
    return render(request,'survey_app/index.html')

def results(request):
    return render(request,'survey_app/submission.html')

def submission(request):
    request.session['first_name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comments'] = request.POST['comments']

    request.session['total_count'] += 1

    print request.session['total_count']


    return redirect('/results')
