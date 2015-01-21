/**
 * Created by tommy on 21-1-15.
 */
/// <reference path="../lib/typedef/typeDef.ts" />

import app = require('app');

app.app.config(['$routeProvider', 'RouteResolverProvider',
	($routeProvider, RouteResolverProvider) => {

		var route = RouteResolverProvider.route;

		$routeProvider.
			when('/home', route.resolve('Home', 'home', 'vm')).
			when('/contact', route.resolve('Contact', 'contact', 'vm')).
			otherwise({redirectTo: '/home'});
	}]);
