'use strict';

(function () {
    angular.module('StationaryStore')
       .factory('CartServices', CartServices);

    // CartService.$inject = [""];

    function CartServices() {

        return new CartService("StationaryStore");
    };

})();