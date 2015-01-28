///<reference path="../../../typedef/typeDef.ts" />

import StringUtils = require('lib/tenshi/recipes/factory/StringUtils');

class TenshiRouteResolver implements ng.IServiceProvider {
	$get() {
		return this;
	}

    //constructor(StringUtils) {
    constructor() {

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
			setBaseDirectories      : setBaseDirectories,
			getControllersDirectory : getControllersDirectory,
			getViewsDirectory       : getViewsDirectory
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

export = TenshiRouteResolver;