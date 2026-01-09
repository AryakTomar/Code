from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)


class Product(models.Model):
    name = models.CharField(max_length=200)
    # This links the product to a specific category
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products_list')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

# class Product(models.Model):
#     name = models.CharField(max_length=200)
#     # Adding null=True and blank=True allows existing rows to stay empty
#     category = models.ForeignKey(
#         Category, 
#         on_delete=models.CASCADE, 
#         related_name='products_list',
#         null=True, 
#         blank=True
#     )
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     stock = models.IntegerField()
#     created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

