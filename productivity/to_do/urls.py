from django.urls import path, re_path

from . import views

app_name = 'to_do'
urlpatterns = [
    path('api/tasks/', views.tasks_list, name='create_list_tasks'),
    path('api/tasks/<int:pk>/', views.tasks_detail, name='remove_update_task'),
    path('api/categories/', views.categories_list, name='create_list_category'),
    path('api/categories/<int:pk>/', views.categories_detail, name='remove_update_category'),
]