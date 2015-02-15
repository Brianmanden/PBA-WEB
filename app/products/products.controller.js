(function(){
	"use strict";

	function productsController($rootScope, productsService, cartService){

		$rootScope.categoriesSelected = new Array();

		/*
		$scope.addToCart = function(){
			productsService.getProducts();
		}		
		$scope.addToCart = function(){
			var amount = this.amount;
			cartService.addProd(product, amount);
		}
		var modelProducts = function(data){
			$rootScope.products = data;
		}
		productsService.getProducts()
			.then(modelProducts);
		*/

		$rootScope.categoryChange = function(category){

			var i = $rootScope.categoriesSelected.indexOf(category);

			if(i > -1){
				$rootScope.categoriesSelected.splice(i, 1);
			}
			else{
				$rootScope.categoriesSelected.push(category);
			}

		}

		$rootScope.categoryFilter = function(product){
			if($rootScope.categoriesSelected.length > 0){
				if($rootScope.categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
		}

	}

	angular
		.module("Main.products", productsController)
		.controller("productsController", productsController);

})();