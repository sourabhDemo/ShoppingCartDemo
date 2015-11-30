'use strict';

(function () {
    angular.module('StationaryStore').config(RouteConfig);

    RouteConfig.$inject = ['$routeProvider'];

    function RouteConfig($routeProvider) {
        $routeProvider
              .when('/store', {
                  templateUrl: 'Views/store.html'
              })
              .when('/products/:productSku', {
                  templateUrl: 'Views/product.html'
              })
              .when('/cart', {
                  templateUrl: 'Views/shoppingCart.html'
              })
              .when('/chart', {
                    templateUrl: 'Views/chart.html'
              })
              .otherwise({
                  redirectTo: '/store'
              });
        };

})();