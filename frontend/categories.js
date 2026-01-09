angular.module('categoryApp', [])
    .config(['$httpProvider', function($httpProvider) {
        // Essential for Django CSRF protection
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }])
    .controller('CategoryController', function($scope, $http) {


                $scope.loadCategory = function() {
                    $http.get('http://127.0.0.1:8000/categories/')
                        .then(function(response) {
                            $scope.categories = response.data;
                        })
                        .catch(function(error) {
                            console.error('Error loading categories:', error);
                        });
                };


                $scope.editCategory = function(category) {
                    category.original = angular.copy(category);
                    category.editing = true;
                };

                $scope.saveCategory = function(category) {
                    $http.put('http://127.0.0.1:8000/categories/' + category.id + '/', category)
                        .then(function(response) {
                            category.editing = false;
                            delete category.original;
                        })
                        .catch(function(error) {
                            console.error('Error saving category:', error);
                        });
                };
                 // Cancel edit
                $scope.cancelCategory = function(category) {
                    angular.copy(category.original, category);
                    category.editing = false;
                    delete category.original;
                };

                                // Delete 
                $scope.deleteCategory = function(category) {
                    if (confirm('Are you sure you want to delete this?')) {
                        $http.delete('http://127.0.0.1:8000/categories/' + category.id + '/', category)
                            .then(function() {
                                var index = $scope.category.indexOf(category);
                                $scope.category.splice(index, 1);
                            })
                            .catch(function(error) {
                                console.error('Error deleting:', error);
                            });
                    }
                };
                // Initial load
                $scope.loadCategory();
            });

    //     // Base URL must match your urls.py exactly
    //     const API_URL = 'http://127.0.0.1:8000/categories/'; 

    //     $scope.categories = [];
    //     $scope.newCat = { name: '', description: '' };

    //     // GET: Fetch all categories
    //     $scope.getCategories = function() {
    //         $http.get(API_URL).then(function(response) {
    //             $scope.categories = response.data;
    //         }, function(error) {
    //             console.error("Error fetching categories", error);
    //         });
    //     };

    //     // POST: Add new category
    //     $scope.addCategory = function() {
    //         $http.post(API_URL, $scope.newCat).then(function(response) {
    //             $scope.categories.push(response.data);
    //             $scope.newCat = { name: '', description: '' }; 
    //         }).catch(error => console.error("Create error", error));
    //     };

    //     // PUT: Update existing category
    //     $scope.saveCat = function(cat) {
    //         // Ensure the trailing slash is present if your urls.py expects it
    //         $http.put(API_URL + cat.id + '/', cat).then(function(response) {
    //             cat.editing = false;
    //             delete cat.backup;
    //         }).catch(error => console.error("Update error", error));
    //     };

    //     // DELETE: Remove category
    //     $scope.deleteCat = function(cat) {
    //         if(confirm("Are you sure? This may affect products linked to this category.")) {
    //             $http.delete(API_URL + cat.id + '/').then(function() {
    //                 var index = $scope.categories.indexOf(cat);
    //                 $scope.categories.splice(index, 1);
    //             }).catch(error => console.error("Delete error", error));
    //         }
    //     };
    //     // Initial Load
    //     $scope.getCategories();
    // });