(function(){
	"use strict";

	function productsController($scope){
	//, productsService, cartService){

		//alert("productsController virker ?");

		var addToCart = function(){
			$scope.test = "addToCart";
			alert("addToCart");
		}

		/*
		var modelProducts = function(data){
			$scope.products = data;
		}

		var addToCart = function(){
			var amount = this.amount;
			cartService.addToCart(product, amount);
		}

		productsService.getProducts()
			.then(modelProducts);

		var categoryChange = function(category){
			var i = $scope.categoriesSelected.indexOf(category);

			if(i > -1){
				$scope.categoriesSelected.splice(i, 1);
			}
			else{
				$scope.categoriesSelected.push(category);	
			}
		}

		var categoryFilter = function(product){
			if($scope.categoriesSelected.length > 0){
				if($scope.categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
		}

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

		return{
			addToCart: addToCart
		}

	}

	angular
		.module("Main.products", productsController)
		//.controller("productsController", productsController, [productsService, cartService]);
		.controller("productsController", productsController);

})();