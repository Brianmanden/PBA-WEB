(function(){
	"use strict";

	var productsService = function($http, $rootScope){

		var getProducts = function(response){

			return $http.get("./app/data/products.json")
				.then(
					function(response){
						return response.data;
					}, getError
				)
		};

		var getCategories = function(response){

			return $http.get("./app/data/categories.json")
						.then(function(response){
							return response.data;
						}, getError)
		};

		var getProduct = function(prodId){
			return $http.get("./app/data/products.json")
						.then(function(response){
							return findProductInArray(response.data, parseInt(prodId));
						})
		}

		var getError = function(reason){
			console.log(reason);
		}

		var findProductInArray = function(data, prodId){
			return data.filter(function(elem){
				if(elem.prodId === prodId){
					return elem;
				}
			});
		}
		
		return{
			getProducts: getProducts,
			getCategories: getCategories,
			getProduct: getProduct
		}
	}

	angular
		.module("Main.products")
		.factory('productsService', productsService);

})();