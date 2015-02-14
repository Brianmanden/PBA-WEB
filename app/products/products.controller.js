(function(){
	"use strict";

	// NIHA: productsService sættes på som dependency, så den er til
	// rådighed i controlleren
	function productsController($scope, productsService){
	//, productsService, cartService){

		//alert("productsController virker ?");


		// NIHA: Denne variabel (addToCart) vil ikke være synlig, selvom du har brugt 
		// revealing module pattern i bunden.
		// Det skyldes at funktionen productsController ikke instantieres
		// som et objekt, som productsService gør
		var addToCart = function(){
			$scope.test = "addToCart";
			alert("addToCart");
		}

		// Tilføjede denne funktion, som kan køres fra product controller i view
		$scope.addToCart = function(){
			productsService.getProducts();
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


		// NIHA: Fjerner dette return statement - se kommentar i toppen
		// return{
		//	addToCart: addToCart
		//}

	}

	angular
		.module("Main.products", productsController)
		//.controller("productsController", productsController, [productsService, cartService]);
		.controller("productsController", productsController);

})();