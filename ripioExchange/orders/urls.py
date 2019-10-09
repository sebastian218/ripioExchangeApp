from rest_framework import routers
from .api import OrderViewSet
from .api import OrdersAllViewSet


router = routers.DefaultRouter()
router.register('api/orders', OrderViewSet, 'orders')
router.register('api/ordersAll', OrdersAllViewSet, 'orders')

urlpatterns = router.urls
