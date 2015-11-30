'use strict';

(function () {
    angular.module('StationaryStore')
        .controller('Store', Store);

    Store.$inject = ["CartServices"];

    function Store(CartServices) {
        var vm = this;

        vm.store = {
            products: [new item("apl", "Apple", "An apple a day keep doctor away.", 120)
                //{ "sku": "apl", "name": "Apple", "description": "An apple a day keep doctor away", "price": 120 }
                    ]
        };
        
        vm.cart = CartServices;
       
    };

})();