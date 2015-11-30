'use strict';

(function () {
    angular.module('StationaryStore')
       .controller('Product', Product);

    Product.$inject = ["$routeParams","CartServices"];

    function Product($routeParams, CartServices) {
        var vm = this;

        vm.product = new item("apl", "Apple", "An apple a day keep doctor away.", 120,10,20,30,15,25,40);
        
        vm.cart = new CartService("StationaryStore");
        //////////////////////////////


    };


})();