from django.conf import settings
from django.db import models


class Insurance(models.Model):
    ranking = models.IntegerField()
    img = models.CharField(max_length=50)
    company = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    insurance_fee = models.IntegerField()
    consultation  = models.BooleanField(default=True)
    period_insurance = models.CharField(max_length=200)
    payment_period = models.CharField(max_length=200)
    benefits = models.IntegerField()
    limit_days=models.IntegerField()
    total_limit_days=models.IntegerField()
    advanced_medical_addition= models.CharField(max_length=200)
    contract_age = models.CharField(max_length=200)
    contract_age_addition = models.CharField(max_length=200)
    online = models.BooleanField(default=True)
    offline = models.BooleanField(default=True)
    overview = models.CharField(max_length=200)
    overview_addition = models.CharField(max_length=200)
    document_number = models.CharField(max_length=200)

    def publish(self):
        self.save()

    def __str__(self):
        return self.title