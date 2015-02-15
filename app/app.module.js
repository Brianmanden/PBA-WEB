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
		});


		function MainController($scope, $http){
			
			
			/*
			$scope.amount = 1;
			$scope.cart = [];
			$scope.cartStatus = "...is empty baby";
			*/
		}

})();