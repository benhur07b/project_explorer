from django.conf.urls import url
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url(r"^$", views.project_explorer_view, name='project_explorer'),
    # url(r"^$", TemplateView.as_view(template_name="project_explorer/project_explorer.html"), name="project_explorer"),
]