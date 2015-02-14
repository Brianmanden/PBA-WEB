(function(){
	"use strict";

	var cartService = function($rootScope){
		
		var addProductToCart = function(product, amount){
			alert("addProductToCart" + product + " - " + amount);
			// TODO
			// checke om product findes i kurven
			// hvis - opdatér antal
			// hvis ikke - læg i kurv

			/*
			if ($rootScope.cartProducts[product.name]) {
				console.log("allerede i kurv");
			};
			*/
			/*else{
				opdatere kurve
			}
			*/
			/*
			$rootScope.cartProducts[product.name] = {
				product: product,
				amount: amount
			}
			*/
		}

		//
		// Public API
		//
		return{
			addProductToCart: addProductToCart
		}
	}

	angular
		.module("Main")
		.factory('cartService', cartService);
})();