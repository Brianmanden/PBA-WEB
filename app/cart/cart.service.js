(function(){
	"use strict";

	var cartService = function($rootScope){
		return true;
	}

	angular
		.module("Main.cart")
		.factory('cartService', cartService);

})();