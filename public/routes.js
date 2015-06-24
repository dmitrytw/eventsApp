
// create the module 
var app = angular.module('routes-module', ['ngRoute']);

//configure routes
app.config(function($routeProvider){
	$routeProvider
		//home page route
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		// about page route
		.when('/about', {
			templateUrl: 'pages/about.html',
			controller: 'aboutController'
		})

		.when('/engclubs', {
			templateUrl: 'pages/events.html',
			controller: 'EngclubsController as eventList'
		})

		.when('/mafiaclubs', {
			templateUrl: 'pages/events.html',
			controller: 'MafiaclubsController as eventList'
		})

		.when('/coworkings', {
			templateUrl: 'pages/coworkings.html',
			controller: 'CoworkingsController as eventList'
		})

		//contact page route
		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'ContactformController'
		});
});

//create controller and inject angular scope
app.controller('mainController', function($scope){
	//create a message to display in our view
	$scope.message = 'Yaaha! Angular rocks at home!';
});

app.controller('aboutController', function($scope){
	$scope.message = 'Oh! Look what i can! And you\'ll know more about me!';
});

app.controller('contactController', function($scope){
	$scope.message = 'You can contact me on this page!';
});
