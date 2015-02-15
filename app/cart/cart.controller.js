(function(){
	"use strict";

	function cartController($rootScope){

		$rootScope.addToCart = function(product, amount){


			$rootScope.cart.push(
				{
					"prodId": product.prodId, "amount": amount,	"prodTitle": product.prodTitle,	"prodPrice": product.prodPrice, "prodImg": product.prodImg
				}
			);
			updateCartStatus();
		}

		var updateCartStatus = function(){
			if($rootScope.cart.length == 0){
				$rootScope.cartStatus = "...is empty baby";
			}
			else{
				var cartAmount = 0;
				var statusStr = "...contains: ";

				angular.forEach($rootScope.cart, function(cartItem){
					cartAmount += cartItem.amount;
				});

				if(cartAmount == 1){
					statusStr += cartAmount + " item";
				}
				else{
					statusStr += cartAmount + " items";
				}

				$rootScope.cartStatus =  statusStr;
			}
		}

	}

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);

})();