from django.shortcuts import render, render_to_response


# Create your views here.

def index(req):
    return render_to_response('angularJS2/index.html')
