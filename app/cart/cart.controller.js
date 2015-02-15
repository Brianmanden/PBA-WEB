(function(){
	"use strict";

	function cartController($rootScope){

		$rootScope.addToCart = function(product, amount){

			if($rootScope.cart[product.prodId]){
				$rootScope.cart[product.prodId]["amount"] += amount;
			}
			else{
				$rootScope.cart[product.prodId] = {
					prodId: product.prodId,
					product: product,
					amount: amount
				};
			}
			updateCartStatus();
		}

		$rootScope.lessProd = function(item){
			if($rootScope.cart[item.prodId]["amount"] > 1){
				$rootScope.cart[item.prodId]["amount"] -= 1;
				updateCartStatus();
			}
		}

		$rootScope.moreProd = function(item){
			$rootScope.cart[item.prodId]["amount"] += 1;
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
					console.log("-1-" + cartItem);
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