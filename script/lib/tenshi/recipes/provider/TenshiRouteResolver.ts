///<reference path="../../../typedef/typeDef.ts" />

import StringUtils = require('lib/tenshi/utils/StringUtils');

class TenshiRouteResolver implements ng.IServiceProvider {

	/**
	 * This is a mandatory Ng method for providers
	 *
	 * @access public static
	 * @method: $get
	 */
	$get() {
		return this;
	}

	/**
	 * Route configurations
	 *
	 * @method: routeConfig
	 */
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

	/**
	 * Resolve the routing
	 *
	 * @method: route
	 */
	route = function(routeConfig) {
		var resolve = (baseName, viewId, controllerAs, secure) => {

				var baseFileName = StringUtils.camelCase(baseName),
					controller = baseFileName + 'Controller',
					routeDef:any = {
						templateUrl : routeConfig.getViewsDirectory() + viewId + '/' + baseName + '.html',
						controller : controller,
						controllerAs : ((controllerAs)? controllerAs : ''),
						secure : ((secure) ? secure : false)
					};

				routeDef.resolve = {
					load: ['$q', '$rootScope', function ($q, $rootScope) {
						var dependencies = [routeConfig.getControllersDirectory() + viewId + '/' + controller + '.js'];
						return resolveDependencies($q, $rootScope, dependencies);
					}]
				};

				return routeDef;
			},

			resolveDependencies:any = ($q, $rootScope, dependencies) => {
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