(function(){
	'use strict';

	angular
		.module("marvel")
		.factory("apiMarvel",apiMarvel);

	apiMarvel.$inject = ["$resource"];
	function apiMarvel($resource){
		return $resource("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9b67dccf364059a416eac9010968e1dc&hash=2ae04ea0d6dcb3544f9c6e720a3a2ed2&limit=10")
	}


})();