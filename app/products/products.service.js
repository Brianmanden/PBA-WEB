(function(){
	"use strict";

	var productsService = function($http){

		var categoriesSelected = new Array();

		var getProducts = function(response){
			return $http.get("./app/data/products.json")
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

		var getCategories = function(response){
			return $http.get("./app/data/categories.json")
					.then(function(response){
						return response.data;
					}, getError)
		};

		var getCategoriesSelected = function(){
      		return categoriesSelected;
      	}

		var productFilter = function(product){
			if(categoriesSelected.length > 0){
				if(categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
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
		
		var categoryChange = function(category){
			var i = categoriesSelected.indexOf(category);
            if (i > -1) {
                categoriesSelected.splice(i, 1);
            } 
            else {
                categoriesSelected.push(category);
            }
        }

		return{
			getProducts: getProducts,
			getProduct: getProduct,
			getCategories: getCategories,
			getCategoriesSelected: getCategoriesSelected,
			productFilter: productFilter,
			categoryChange: categoryChange
		}
	}

	angular
		.module("Main.products")
		.factory('productsService', productsService);

})();