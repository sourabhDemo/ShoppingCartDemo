'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams, $location, $window, DataService) {

    $scope.name="";
    $scope.description="";
    $scope.price="";
    // get store and cart from service
    if ($window.localStorage["bicycleproduct"] === undefined || $window.localStorage["bicycleproduct"] === "undefined") {
        $scope.store = DataService.store;
    }
    else {
        $scope.store = JSON.parse($window.localStorage["bicycleproduct"]);
    }
    $scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        // $scope.product = $scope.store.getProduct($routeParams.productSku);
        for (var i = 0; i < $scope.store.length; i++) {
            if ($scope.store[i].sku == sku)
                $scope.product = $scope.store[i];
        }
    }

    $scope.AddBicycle = function () {
        $location.path('/addproduct');
    };

    $scope.SubmitBicycle = function () {
        $scope.store.products.push(new product($scope.name,$scope.name, $scope.description, parseInt($scope.price),[]));
        $window.localStorage["bicycleproduct"] = angular.toJson($scope.store);
        $location.path('/store');
    };
}
