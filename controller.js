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
		case '#login':
			loadLogin();
		break;
		case '#register':
			loadRegister();
		break;
		case '#results':
			loadResults();
		break;
		case '#admin':
			loadAdmin();
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
		$("#logButton").click(function() {
			login($("#user").val(),$("#pass").val());
		});
	});
}

function loadRegister() {
	$.get("register.mst", function(template) {
		var rend = Mustache.render(template);
		$("#body").html(rend);
		$("#regButton").click(function() { 
			signup($("#newUser").val(),$("#newPass").val());
		});
	});
}
function loadResults() {
	$.get("results.mst", function(template) {
		var rend = Mustache.render(template);
		$("#body").html(rend);
	});
}

function loadAdmin() {
	Parse.initialize("MBfkHSHRIDp4ADroc0JyUznwI18CqyP0KgN59Hz3", "Xzbl6FzWBnUiOlgiHgo7xdBDyaFdPQ7SoZNIvf1R");
	if(Parse.User.current() == null) {
		alert("You aren't logged in!");
		window.location = '#home';
	}
	else $.get("admin.mst", function(template) {
		var rend = Mustache.render(template);
		$("body").html(rend);
		$("#logoutButton").click(function() {
			logout();
		});
	});
}
