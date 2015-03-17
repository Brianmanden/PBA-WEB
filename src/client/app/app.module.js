(function(){
	'use strict';

	angular
		.module(
			"Main",
			["ngRoute", "Main.cart", "Main.products", "Main.product"]
		)
		.controller("MainController", MainController)
		.config(
			function($routeProvider) {
				$routeProvider
				.when("/", {
					templateUrl: "./app/products/products.html",
					controller: "productsController"
				})
				.when("/product/:id", {
					templateUrl: "./app/products/product.html",
					controller: "productController"
				})
				.when("/checkout", {
					templateUrl: "./app/checkout/checkout.html",
					controller: "cartController"
				})
				.otherwise({ redirectTo: "/	"});
			}
		)
		.run(function($rootScope){
			$rootScope.cart = {};
			$rootScope.amount = 1;
			$rootScope.cartStatus = "... er tom";
			$rootScope.total = 0;
		});

		function MainController($rootScope, $http){
		}

})();