(function(){

	function productController($scope, productsService, cartService, $routeParams){

		var modelProduct = function(productArray){
			$scope.product = productArray[0];
		}



		productsService.getProduct($routeParams.id)
			.then(modelProduct);



		$scope.addToCart = function(product, amount){
			cartService.addToCart(product, amount);
		}

	}

	angular
	.module("Main.product", [])
	.controller("productController", productController);
})();