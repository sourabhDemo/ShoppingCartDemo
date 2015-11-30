'use strict';

(function () {
    angular.module('BicycleStore').
      config(['$routeProvider', function ($routeProvider) {
          $routeProvider.
              when('/store', {
                  templateUrl: 'partials/store.htm',
                  controller: storeController
              }).
              when('/products/:productSku', {
                  templateUrl: 'partials/product.htm',
                  controller: storeController
              }).
              when('/cart', {
                  templateUrl: 'partials/shoppingCart.htm',
                  controller: storeController
              }).
              otherwise({
                  redirectTo: '/store'
              });
      }]);


})();