/// <reference path="../lib/require/require.d.ts" />
/// <reference path="../lib/angular/angular.d.ts" />
/// <reference path="../lib/angular/angular-route.d.ts" />

export var app = angular.module("sampleApp", ['ngRoute']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'views/home.html',
				controller: 'RouteController'
			}).
			when('/route1', {
				templateUrl: 'views/view1.html',
				controller: 'RouteController'
			}).
			when('/route1/:param', {
				templateUrl: 'views/detail-view1.html',
				controller: 'RouteController'
			}).
			when('/route2', {
				templateUrl: 'views/view2.html',
				controller: 'RouteController'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);

app.controller("RouteController", function($scope, $routeParams) {
	$scope.param = $routeParams.param;
});