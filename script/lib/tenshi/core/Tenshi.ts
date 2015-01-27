/**
 * Created by tommy on 23-1-15.
 *
 * Tenshi Furēmuwāku
 */

/// <reference path="../../typedef/typeDef.ts" />

import angular = require('angular');
import TenshiModules = require('lib/tenshi/modules/TenshiModules');
import TenshiRouteResolver  = require('lib/tenshi/router/TenshiRouteResolver');

class Tenshi {
	bootstrap() {
		this.config();
		var $html = $('html');
		angular.bootstrap($html, [TenshiModules.app['name']]);
		$html.addClass('ng-app');
	}

	config() {
		console.log("Angular Config Routing");

//		var servicesApp:any = angular.module('TenshiRouteResolverServices', []);
		////Must be a provider since it will be injected into module.config()
		TenshiModules.app.provider('TenshiRouteResolver', TenshiRouteResolver);

		TenshiModules.app.config(['$routeProvider', 'TenshiRouteResolverProvider',
		($routeProvider, TenshiRouteResolverProvider) => {

			var route = TenshiRouteResolverProvider.route;

			$routeProvider.
				when('/home', route.resolve('Home', 'home', 'vm')).
				when('/contact', route.resolve('Contact', 'contact', 'vm')).
				otherwise({redirectTo: '/home'});
		}]);
	}
}

export = Tenshi;

//var servicesApp:any = angular.module('TenshiRouteResolverServices', []);
//
////Must be a provider since it will be injected into module.config()
//servicesApp.provider('TenshiRouteResolver', TenshiRouteResolver);