# from rest_framework import serializers
# from .models import Product

# class ProductSerializer(serializers.ModelSerializer):

#     class Meta:
#         models = Product
#         fields = "__all__"


from rest_framework import serializers
from .models import Category, Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

# class CategorySerializer(serializers.ModelSerializer):
#     # This must match the 'related_name' in your Product model
#     products = ProductSerializer(many=True, read_only=True)

#     class Meta:
#         model = Category
#         fields = ['id', 'name', 'description', 'products']