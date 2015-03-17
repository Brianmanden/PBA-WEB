(function(){
	"use strict";

	function productsController($scope, productsService, cartService){

		$scope.tester = function(){
			alert("123123123123123");
		}

		var modelProducts = function(data){
			$scope.products = data;
		}
		var modelCategories = function(data){
			$scope.categories = data;
		}
		var updateCategoriesSelected = function(){
			$scope.categoriesSelected = productsService.getCategoriesSelected();
		}



		productsService.getProducts()
			.then(modelProducts);
		productsService.getCategories()
			.then(modelCategories);



		var updateCategoriesSelected = function(){
			$scope.categoriesSelected = productsService.getCategoriesSelected();
		}



		$scope.productFilter = function(product){
			return productsService.productFilter(product);
		}
		$scope.categoryChange = function(category){
			productsService.categoryChange(category);
			updateCategoriesSelected();
		}



		updateCategoriesSelected();

	};

	angular.
		module("Main.products", [])
		.controller("productsController", productsController);

})();