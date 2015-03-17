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

		$scope.logOrder = function(){
			var orderObj = {};
			orderObj["kunde"] = this.kunde;
			orderObj["kurv"] = $rootScope.cart;
			cartService.logOrder(orderObj);
		}

	}

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);

})();