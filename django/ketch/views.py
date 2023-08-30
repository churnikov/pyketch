from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.generic import View
import json
from django.views.decorators.csrf import requires_csrf_token

# Create your views here.


def index(request):
    context = dict()
    return render(request, "ketcher_app.html", context)


def panel_ketch(request):
    context = dict()
    return render(request, "pyketch-panel.html", context)


def jupyter_ketch(request):
    context = dict()
    return render(request, "ketcher_jupyter.html", context)


class PredictAPI(View):
    def post(self, request):
        print(request.body)
        smiles = json.loads(request.body).get("smiles")
        return JsonResponse({"pred": smiles})

