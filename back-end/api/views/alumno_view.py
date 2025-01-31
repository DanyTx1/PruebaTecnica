from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework.generics import CreateAPIView
from api.models import Alumno
from api.serializers import AlumnoSerializer


# Create your views here.

# Endpoint para crear un alumno (POST)

class AlumnoViewSet(CreateAPIView):
    serializer_class = AlumnoSerializer
    queryset = Alumno.objects.all()

    def post(self, request, *args, **kwargs):
        data_serializer = self.serializer_class(data=request.data)
        if data_serializer.is_valid():
            data_serializer.save()
            return Response(data_serializer.data, status=status.HTTP_201_CREATED)
        return Response(data_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        alumno = self.queryset.filter(id=self.kwargs['pk']).first()
        if alumno is not None:
            serializer = self.serializer_class(alumno)
            return Response(serializer.data)
        return Response(status=status.HTTP_404_NOT_FOUND)


#Endpoint para consultar alumnos por grado (GET)
@api_view(['GET'])
def consultar_alumno(request, idGrado):
    alumnos = Alumno.objects.filter(grado=idGrado)
    serializer = AlumnoSerializer(alumnos, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
