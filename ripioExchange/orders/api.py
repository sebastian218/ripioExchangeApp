from .models import Order
from rest_framework import viewsets , permissions
from .serializers import OrderSerializer

#Order Viewset

class OrderViewSet(viewsets.ModelViewSet):

    serializer_class = OrderSerializer
    permissions_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.orders.all()

    def perform_create(self, serializer):
         serializer.save(owner=self.request.user)

class OrdersAllViewSet(viewsets.ModelViewSet):

    queryset =  Order.objects.all()
    serializer_class = OrderSerializer
    permissions_classes = [
        permissions.AllowAny
    ]