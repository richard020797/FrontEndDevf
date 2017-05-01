(function(){
	'use strict';

	angular
		.module("ecommerce")
		.factory("apiEcommerceCategories",apiEcommerceCategories)
		.factory("apiEcommerceProducts",apiEcommerceProducts);

	apiEcommerceCategories.$inject = ["$resource"];
	apiEcommerceProducts.$inject = ["$resource"];

	function apiEcommerceCategories($resource){
		return $resource("segundaMano/server/categories.json")
	}

	function apiEcommerceProducts($resource){
		return $resource("segundaMano/server/myproducts.json")
	}

})();