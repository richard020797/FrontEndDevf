(function(){

	'use strict';

	angular
		.module("rapi")
		.factory("apiNews", apiNews);

	apiNews.$inject = ["$resource"];
	function apiNews()
	{
		return
		{
			title: 'No Title',
			setTitle: function()
			{
				return $resource("resources/db.json");
			}
				
		} 
	}
})();