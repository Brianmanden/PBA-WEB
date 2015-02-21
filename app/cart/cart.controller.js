(function(){
	"use strict";

	function cartController($rootScope, $scope, cartService){

		$scope.delProd = function(item){
			cartService.delProd(item);
		}

		$scope.moreProd = function(item){
			cartService.moreProd(item);
		}

		$scope.lessProd = function(item){
			cartService.lessProd(item);
		}

	}

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);

})();