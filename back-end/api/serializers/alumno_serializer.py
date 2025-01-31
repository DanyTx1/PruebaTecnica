from rest_framework import serializers
from api.models import Alumno

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = ['pk', 'nombre_alumno', 'fecha_nacimiento', 'nombre_padre', 'nombre_madre', 'grado', 'seccion']
