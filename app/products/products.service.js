(function(){
	"use strict";

	var productsService = function($rootScope, $http){

		var getProducts = function(response){
			$rootScope.products = response.data;
		}
		
		var getCategories = function(response){
			$rootScope.categories = response.data;
		}
		
		var getError = function(reason){
			$rootScope.error = "0.o ... Something broke - " + reason;
		}
		
		$http.get("./app/data/products.json")
			.then(getProducts, getError);

		$http.get("./app/data/categories.json")
			.then(getCategories, getError);

		return true;
	}

	angular
		.module("Main.products")
		.factory('productsService', productsService);

})();
