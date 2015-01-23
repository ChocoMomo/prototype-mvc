/// <reference path="../lib/typedef/typeDef.ts" />

//module sampleApp {
//		export var app = angular.module("sampleApp", ['ngRoute', 'RouteResolverServices']);
//		export var controllers = angular.module('sampleApp.controllers',[]);
//		export var directives = angular.module('sampleApp.directives',[]);
//
//	app.config(['$routeProvider', 'RouteResolverProvider',
//		($routeProvider, RouteResolverProvider) => {
//
//			var route = RouteResolverProvider.route;
//
//			$routeProvider.
//				when('/home', route.resolve('Home', 'home', 'vm')).
//				when('/contact', route.resolve('Contact', 'contact', 'vm')).
//				otherwise({redirectTo: '/home'});
//		}]);
//}