from django.urls import path

from . import views as ketch_views


urlpatterns = [
        path('', ketch_views.index),
        path('panel/', ketch_views.panel_ketch),
        path('jupyter/', ketch_views.jupyter_ketch),
        path('predict/', ketch_views.PredictAPI.as_view())
        ]
