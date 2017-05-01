(function(){
	'use strict';

	var news =
	{
		templateUrl: "components/apa/news/news.js"
		controller: newsCrtl
	}

	agular
		.module("rapi")
		.component("news", news);

	newsCrtl.$inject=["apiNews"];

	function newsCtrl(apiNews)
	{
		var n = this;
		c.title = null;
		c.apiData = apiNews.query();
		c.sendEvent = send;

		function send()
		{
			apiData.setTitle
		}
	}
})();