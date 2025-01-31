from django.urls import path
from .views import  consultar_alumno, AlumnoViewSet

urlpatterns = [
    path('crear-alumno/', AlumnoViewSet.as_view(), name='crear_alumno'),
    path('crear-alumno/<int:pk>', AlumnoViewSet.as_view(), name='crear_alumno_by_id'),
    path('consultar-alumno/<int:idGrado>/', consultar_alumno, name='consultar_alumno'),
]
