'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var storeApp = angular.module('BicycleStore', []).
  config(['$routeProvider', function($routeProvider) {
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
       when('/addproduct', {
           templateUrl: 'partials/addproduct.htm',
           controller: storeController
       }).
      otherwise({
        redirectTo: '/store'
      });
}]);

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
storeApp.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("BicycleStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with PayPal, you have to create a merchant account with 
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "");//TODO: here need to add merchantID fr paypal

    // enable Google Wallet checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with Google Wallet, you have to create a merchant account with 
    // Google. You can do that here:
    // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
    //TODO: here Need to add Google wallet credentials
    myCart.addCheckoutParameters("Google", "",
        {
            ship_method_name_1: "",
            ship_method_price_1: "",
            ship_method_currency_1: "",
            ship_method_name_2: "",
            ship_method_price_2: "",
            ship_method_currency_2: ""
        }
    );

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});