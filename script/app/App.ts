/// <reference path="../lib/typedef/typeDef.ts" />

export var app = angular.module("sampleApp", ['ngRoute', 'RouteResolverServices']);

app.config(['$routeProvider', 'RouteResolverProvider',
	($routeProvider, RouteResolverProvider) => {

		var route = RouteResolverProvider.route;

		$routeProvider.
			when('/home', route.resolve('Home', 'home', 'vm')).
			when('/contact', route.resolve('Contact', 'contact', 'vm')).
			otherwise({redirectTo: '/home'});
	}]);