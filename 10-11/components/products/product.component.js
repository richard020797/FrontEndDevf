(function(){
	'use strict';

	var ecommerceProducts=
	{
		  templateUrl: "components/products/product.component.html",
		  controller: ecommerceProductsCtrl
	};

	angular
		.module("ecommerce")
		.component("ecommerceProducts",ecommerceProducts);

	ecommerceProductsCtrl.$inject= ["apiEcommerceProducts"];

	function ecommerceProductsCtrl(apiEcommerceProducts)
	{
		var products = this;

		products.apiData = apiEcommerceProducts.query();
		console.log(products.apiData);
	}

})();