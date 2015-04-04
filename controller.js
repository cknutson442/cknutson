$(function(){
	$.get("navigation.mst",function(template) {
		var txt = {
			"brand":"CarsDB",
			"sort":"Sort by ",
			"sorters": [
				{"sortparam":"Make"},
				{"sortparam":"Engine Type"},
				{"sortparam":"Engine Location"},
				{"sortparam":"Drive Wheels"},
				{"sortparam":"Transmission Type"},
				{"sortparam":"Body Style"},
				{"sortparam":"Model Year"}
			]
		};
		var rend = Mustache.render(template,txt);
		$("#navbar").html(rend);
	});

	window.onhashchange = function(){
		hashAction();
	};
	hashAction();
});

function hashAction(){
	switch(location.hash) {
		case '#home':
			loadHome();
		break;
		case '#carview':
			//do something
		break;
		case '#results':
			//do something
		break;
		case '#login':
			loadLogin();
		break;
		case '#register':
			loadRegister();
		break;
		default:
			location.hash='home';
	}
}

function loadHome() {
	$.get("home.mst", function(template) {
		var rend = Mustache.render(template);
		$("#body").html(rend);
	});
}

function loadLogin() {
	$.get("login.mst", function(template) {
		var rend = Mustache.render(template);
		$("#body").html(rend);
	});
}

function loadRegister() {
	$.get("register.mst", function(template) {
		var rend = Mustache.render(template);
		$("#body").html(rend);
	});
}
