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
		});


		function MainController($scope, $http){
			/*
			$scope.categoriesSelected = new Array();
			$scope.amount = 1;
			$scope.cart = [];
			$scope.cartStatus = "...is empty baby";
			*/
		}

})();