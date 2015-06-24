
// create the module 
var app = angular.module('routes-module', ['ngRoute']);

//configure routes
app.config(function($routeProvider){
	$routeProvider
		//Fresh events page route
		.when('/', {
			templateUrl: 'pages/fresh-events.html',
			controller: 'FresheventsController as eventList'
		})

		//English clubs page route
		.when('/engclubs', {
			templateUrl: 'pages/events.html',
			controller: 'EngclubsController as eventList'
		})

		//Mafia clubs page route
		.when('/mafiaclubs', {
			templateUrl: 'pages/events.html',
			controller: 'MafiaclubsController as eventList'
		})

		//Coworkings page route
		.when('/coworkings', {
			templateUrl: 'pages/coworkings.html',
			controller: 'CoworkingsController as eventList'
		})

		//Contact page route
		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'ContactformController'
		});
});

