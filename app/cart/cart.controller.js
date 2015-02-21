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
		
		/*
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

		$rootScope.delProd = function(item){
			delete $rootScope.cart[item.prodId];
			updateCartStatus();
		}
		*/

		var updateCartStatus = function(){
			if($rootScope.cart.length == 0){
				$rootScope.cartStatus = "...er tom";
			}
			else{
				var cartAmount = 0;
				var cartTotal = 0;
				var statusStr = "...indeholder: ";

				angular.forEach($rootScope.cart, function(cartItem){
					cartAmount += cartItem.amount;
					cartTotal += cartItem.amount * cartItem["product"]["prodPrice"];
				});

				if(cartAmount == 1){
					statusStr += cartAmount + " produkt";
				}
				else{
					statusStr += cartAmount + " produkter";
				}

				$rootScope.cartTotal = cartTotal;
				$rootScope.cartStatus =  statusStr;
			}
		}



	}

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);

})();