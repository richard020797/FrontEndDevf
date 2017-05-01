(function(){
	'use strict';

	var ecommerceCategories=
	{
		  templateUrl: "components/categories/category.component.html",
		  controller: ecommerceCategoriesCtrl
	};

	angular
		.module("ecommerce")
		.component("ecommerceCategories",ecommerceCategories);

	ecommerceCategoriesCtrl.$inject= ["apiEcommerceCategories"];

	function ecommerceCategoriesCtrl(apiEcommerceCategories)
	{
		var c = this;
		c.category = null;

		c.apiData = apiEcommerceCategories.query();
		c.category = c.apiData.
		
	}

})();