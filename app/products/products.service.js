(function(){
	"use strict";

	var productsService = function($http){

		var getProducts = function(response){

			return $http.get("./app/data/products.json")
				.then(
					function(response){
						return response.data;
					}
				)
				//, getError(response))
		};

		var getCategories = function(response){


			return $http.get("./app/data/categories.json")
				.then(
					function(response){
						return response.data;
					}
				)
		};
		
		/*
		*
		*
			Spørge Niels...
		*
		*
		var getError = function(reason){
			$rootScope.error = "0.o ... Something broke - " + reason;
		}
		*/

		return{
			getProducts: getProducts,
			getCategories: getCategories
		}
	}

	angular
		.module("Main.products")
		.factory('productsService', productsService);

})();

// https://github.com/eaaa/frameworks2015/blob/master/01-product-listing/dev/products/products.service.js