from rest_framework import serializers

from .models import UploadFile


class UploadFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadFile
        fields = ['id','file','user','uploaded_on']
        
        