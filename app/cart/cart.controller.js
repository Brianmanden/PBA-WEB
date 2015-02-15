(function(){
	"use strict";

	function cartController($rootScope, cartService){

		var addProd = function(product, amount ){
			console.log("cartController.addProd");
			$rootScope.cart.push(
				{
					"prodId": product.prodId,
					"amount": amount,
					"prodTitle": product.prodTitle,
					"prodPrice": product.prodPrice,
					"prodImg": product.prodImg
				}
			);
			updateCartStatus();
		}

		var showCart = function(){
			console.log("virker");
			console.log($scope.cart);
		}
	}

		/*
		var showCart = function(){
			console.log("virker");
			console.log($scope.cart);
		*/
			//$scope.checkOut = [{"id" : 1, "amount": 2}, { "id": 2, "amount": 3}];

			//angular.forEach($scope.cart, function(cartItem){
				/*
				var itemTitle = "";
				var itemPrice = "";
				console.log($scope.products);
				*/
				//console.log($scope.products);
				//console.log(cartItem);
			//});
		

		//}

		/*
		var updateCartStatus = function(){
			if($scope.cart.length == 0){
				$scope.cartStatus = "...is empty baby";
			}
			else{
				var cartAmount = 0;
				var statusStr = "...contains: ";

				angular.forEach($scope.cart, function(cartItem){
					cartAmount += cartItem.amount;
				});

				if(cartAmount == 1){
					statusStr += cartAmount + " item";
				}
				else{
					statusStr += cartAmount + " items";
				}

				$scope.cartStatus =  statusStr;
			}
		}
		*/

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);

})();