(function(){
	"use strict";

	var cartService = function($rootScope){
		return true;


		var lessProd = function(item){
			if($rootScope.cart[item.prodId]["amount"] > 1){
				$rootScope.cart[item.prodId]["amount"] -= 1;
				updateCartStatus();
			}
		}

		var moreProd = function(item){
			$rootScope.cart[item.prodId]["amount"] += 1;
			updateCartStatus();
		}

		var delProd = function(item){
			delete $rootScope.cart[item.prodId];
			updateCartStatus();
		}

		return{
			lessProd : lessProd,
			moreProd: moreProd,
			delProd: delProd
		}

	}

	angular
		.module("Main.cart")
		.factory('cartService', cartService);

})();