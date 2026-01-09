var app = angular.module('subApp', []);

app.controller('SubController', function($scope) {
    // Sample Data
    $scope.plans = [
        { name: 'Basic', duration: 'Monthly', price: 10, discount: 0, editing: false },
        { name: 'Standard', duration: 'Quarterly', price: 25, discount: 5, editing: false },
        { name: 'Pro', duration: 'Annually', price: 90, discount: 15, editing: false }
    ];

    $scope.newPlan = { discount: 0 };

    $scope.addPlan = function() {
        $scope.plans.push(angular.copy($scope.newPlan));
        $scope.newPlan = { discount: 0 }; 
    };

    $scope.deletePlan = function(index) {
        $scope.plans.splice(index, 1);
    };

    $scope.editPlan = function(plan) {
        plan.editing = true;
        plan.originalData = angular.copy(plan);
    };

    $scope.savePlan = function(plan) {
        delete plan.originalData;
        plan.editing = false;
    };

    $scope.cancelEdit = function(plan) {
        angular.extend(plan, plan.originalData);
        plan.editing = false;
    };
});