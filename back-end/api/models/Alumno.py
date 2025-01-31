from django.db import models

class Alumno(models.Model):
    nombre_alumno = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    nombre_padre = models.CharField(max_length=100,  blank=True, null=True)
    nombre_madre = models.CharField(max_length=100, blank=True, null=True)
    grado = models.IntegerField()
    seccion = models.CharField(max_length=10)
    fecha_ingreso = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.nombre_alumno} - Grado {self.grado} ({self.seccion})"
