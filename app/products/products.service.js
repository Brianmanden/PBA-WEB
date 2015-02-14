(function(){
	"use strict";

	var productsService = function($rootScope){

		alert("productsService virker ?");

		var getProducts = function(){
			alert("getProducts");
		}
		
		// $http

		/*
		return $http.get("./app/data/products.json")
			.then(getProducts, getError);
		return $http.get("./app/data/categories.json")
			.then(getCategories, getError);


		var getProducts = function(response){
			$scope.products = response.data;
		}
		var getCategories = function(response){
			$scope.categories = response.data;
		}
		var getError = function(reason){
			$scope.error = "0.o ... Something broke - " + reason;
		}
		*/

		return {
			getProducts: getProducts
			//,
			//getCategories: getCategories
		}
	}

	angular
		.module("Main.products")
		.factory('productsService', productsService);

})();
