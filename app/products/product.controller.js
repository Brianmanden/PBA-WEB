(function(){

	function productController($scope, productsService, $routeParams){
		var modelProduct = function(productArray){
			$scope.product = productArray[0];
		}

		productsService.getProduct($routeParams.id)
			.then(modelProduct);
	}

	angular
	.module("Main.product", [])
	.controller("productController", productController);
})();