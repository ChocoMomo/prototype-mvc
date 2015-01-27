/**
 * Created by tommy on 23-1-15.
 */
/// <reference path="../lib/typedef/typeDef.ts" />
var sitemap = 'app/config/TenshiSitemap';

require([
	sitemap,
	"lib/externals"
],
	function (sitemap) {
		new Main(sitemap);
	});

import Tenshi = require('lib/tenshi/core/Tenshi');
//import TenshiRouteResolver = require('lib/tenshi/core/Tenshi');

class Main {

	public _tenshi:Tenshi;

	constructor(sitemap) {
		$(()=>{
			this._tenshi = new Tenshi();
			this._tenshi.bootstrap();
		})
    }
}

export class TenshiRouteResolver implements ng.IServiceProvider  {

	$get() {
		return this;
	}

	routeConfig = function() {
		var viewsDirectory = 'script/app/views/',
			controllersDirectory = 'script/app/controllers/',

			setBaseDirectories =  (viewsDir, controllersDir) => {
				viewsDirectory = viewsDir;
				controllersDirectory = controllersDir;
			},

			getViewsDirectory = () => {
				return viewsDirectory;
			},

			getControllersDirectory = () => {
				return controllersDirectory;
			};

		return {
			setBaseDirectories: setBaseDirectories,
			getControllersDirectory: getControllersDirectory,
			getViewsDirectory: getViewsDirectory
		};
	}();

	route = function(routeConfig) {

		var resolve = (baseName, viewId, controllerAs, secure) => {

				var routeDef:any = {};
				var baseFileName = baseName.charAt(0).toLowerCase() + baseName.substr(1);

				routeDef.templateUrl = routeConfig.getViewsDirectory() + viewId + '/' + baseFileName + '.html';
				routeDef.controller = baseName + 'Controller';

				if (controllerAs) routeDef.controllerAs = controllerAs;
				routeDef.secure = (secure) ? secure : false;
				routeDef.resolve = {
					load: ['$q', '$rootScope', function ($q, $rootScope) {
						var dependencies = [routeConfig.getControllersDirectory() + viewId + '/' + baseName + 'Controller.js'];
						return resolveDependencies($q, $rootScope, dependencies);
					}]
				};

				return routeDef;
			},

			resolveDependencies = ($q, $rootScope, dependencies) => {
				var defer = $q.defer();
				require(dependencies, function () {
					defer.resolve();
					$rootScope.$apply()
				});

				return defer.promise;
			};

		return {
			resolve: resolve
		}
	}(this.routeConfig);
}

//var servicesApp:any = angular.module('TenshiRouteResolverServices', []);
////Must be a provider since it will be injected into module.config()
//servicesApp.provider('TenshiRouteResolver', TenshiRouteResolver);