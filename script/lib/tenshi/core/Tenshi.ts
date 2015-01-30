/**
 * Created by tommy on 23-1-15.
 *
 * Tenshi Furēmuwāku
 */

/// <reference path="../../typedef/typeDef.ts" />

import ng = require('angular');
import TenshiModules = require('lib/tenshi/modules/TenshiModules');

//Services
import TenshiRouteResolver  = require('lib/tenshi/recipes/provider/TenshiRouteResolver');
import TenshiLogger         = require('lib/tenshi/recipes/provider/TenshiLogger');
//import StringUtils          = require('lib/tenshi/recipes/factory/StringUtils');

class Tenshi {
	private _sitemap:any;

	constructor(sitemap) {
		this._sitemap = sitemap;
	}

	/**
	 * Bootstrap the application
	 *
	 * @access private
	 */
	public bootstrap() {
		this.config();
		var $html = $('html');
		angular.bootstrap($html, [TenshiModules.app['name']]);
		$html.addClass('ng-app');
	}

	/**
	 * Set up the core configuration
	 *
	 * @access private
	 */
	private config() {
        this.registerProviders();
		TenshiModules.app.config(
			// Prefix providers with Provider to access the class e.g: TenshiRouteResolver to TenshiRouteResolverProvider
			['$routeProvider', 'TenshiRouteResolverProvider', '$controllerProvider',
			'$compileProvider', '$filterProvider', '$provide', 'TenshiLoggerProvider',
		($routeProvider, TenshiRouteResolverProvider, $controllerProvider,
		 $compileProvider, $filterProvider, $provide, TenshiLoggerProvider) => {
			// Register the Recipes
			TenshiModules.app.register = {
				controller: $controllerProvider.register,
				directive: $compileProvider.directive,
				filter: $filterProvider.register,
				factory: $provide.factory,
				service: $provide.service
			};

			var route:any = TenshiRouteResolverProvider.route;

			ng.forEach(this._sitemap.views, function(r) {
//				$routeProvider.when('/' + r.id, route.resolve(r.id, r.id, 'vm'));
			});

			$routeProvider.when('/home', route.resolve('Home', 'home', 'vm'));
//			$routeProvider.when('/contact', route.resolve('Contact', 'contact', 'vm'));
			$routeProvider.otherwise({redirectTo: '/home'});

//			this.registerServices();
		}]);
	}

	/**
	 * Register providers
	 *
	 * @access private
	 */
	private registerProviders() {
		////Must be a provider since it will be injected into module.config()
        TenshiModules.providers.provider('TenshiRouteResolver', TenshiRouteResolver);
        TenshiModules.providers.provider('TenshiLogger', TenshiLogger.TenshiLogger);
	}

	/**
	 * Register services
	 *
	 * @access private
	 */
	private registerServices() {
//		TenshiModules.app.register.factory('StringUtils', ()=> {
//			return new StringUtils()
//		});
	}
}

export = Tenshi;