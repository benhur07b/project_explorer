from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# @login_required
# def project_explorer_view(
#     request,
#     template='project_explorer/project_explorer.html'
#     ):

#     return render(
#         request,
#         template)

@login_required
def project_explorer_view(
    request):

    return render(
        request,
        'project_explorer/project_explorer.html')