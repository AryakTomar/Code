var app = angular.module('productApp', []);

app.controller('ProductController', function($scope) {
    // Initial Data
    $scope.products = [
        { name: 'Laptop', category: 'Electronics', price: 1200, stock: 10, editing: false },
        { name: 'Coffee Mug', category: 'Home', price: 15, stock: 50, editing: false }
    ];

    $scope.newProduct = {};

    // Add Product
    $scope.addProduct = function() {
        $scope.products.push(angular.copy($scope.newProduct));
        $scope.newProduct = {}; // Clear form
    };

    // Delete Product
    $scope.deleteProduct = function(index) {
        $scope.products.splice(index, 1);
    };

    // Toggle Edit Mode
    $scope.editProduct = function(product) {
        product.editing = true;
        // Store original data to allow "Cancel"
        product.originalData = angular.copy(product);
    };

    // Save Changes
    $scope.saveProduct = function(product) {
        delete product.originalData;
        product.editing = false;
    };

    // Cancel Edit
    $scope.cancelEdit = function(product) {
        // Restore original values
        angular.extend(product, product.originalData);
        product.editing = false;
    };
});