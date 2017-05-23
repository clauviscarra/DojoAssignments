from django.shortcuts import render, HttpResponse, redirect

def index(request):
    if 'total_gold' not in session:
        request.session['total_gold'] = 0
        request.session['log']=[]
    else:
        pass
    return render_template('index.html')
def 
# Create your views here.
