from .models import Order
from rest_framework import viewsets , permissions
from .serializers import OrderSerializer

#Order Viewset

class OrderViewSet(viewsets.ModelViewSet):
    queryset =  Order.objects.all()
    serializer_class = OrderSerializer
    permissions_classes = [
        permissions.AllowAny
    ]