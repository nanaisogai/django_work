from django.shortcuts import render
from .models import Insurance
# Create your views here.
def comparison(request):
    insurances = Insurance.objects.order_by('ranking')
    return render(request, 'insurance_nav/comparison.html', {'insurances': insurances})