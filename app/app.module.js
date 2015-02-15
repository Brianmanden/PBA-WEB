(function(){
	'use strict';

	angular
		.module(
			"Main",
			["Main.cart", "Main.products"]
		)
		.controller("MainController", MainController)
		.run(function($rootScope){
			$rootScope.cartProducts = {};
			$rootScope.categoriesSelected = new Array();
			$rootScope.cart = {};
			$rootScope.amount = 1;
			$rootScope.cartStatus = "...is empty baby";
		});


		function MainController($rootScope, $http){
		}

})();