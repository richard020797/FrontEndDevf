(function(){
	'use strict';

	angular.module("player",[])
		.controller("mainCtrl",mainCtrl);

	function mainCtrl() {
		var mc = this;

		mc.videos = [
			{"id":"sik0BVbD0-w"},
			{"id":"sik0BVbD0-w"},
			{"id":"sik0BVbD0-w"},
			{"id":"sik0BVbD0-w"}
		];
	}
})();