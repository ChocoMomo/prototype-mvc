///<reference path="../../../typedef/typeDef.ts" />
define(["require", "exports", 'lib/tenshi/utils/StringUtils'], function(require, exports, StringUtils) {
    var TenshiRouteResolver = (function () {
        function TenshiRouteResolver() {
            /**
            * Route configurations
            *
            * @method: routeConfig
            */
            this.routeConfig = function () {
                var viewsDirectory = 'script/app/views/', controllersDirectory = 'script/app/controllers/', setBaseDirectories = function (viewsDir, controllersDir) {
                    viewsDirectory = viewsDir;
                    controllersDirectory = controllersDir;
                }, getViewsDirectory = function () {
                    return viewsDirectory;
                }, getControllersDirectory = function () {
                    return controllersDirectory;
                };

                return {
                    setBaseDirectories: setBaseDirectories,
                    getControllersDirectory: getControllersDirectory,
                    getViewsDirectory: getViewsDirectory
                };
            }();
            /**
            * Resolve the routing
            *
            * @method: route
            */
            this.route = function (routeConfig) {
                var resolve = function (baseName, viewId, controllerAs, secure) {
                    var baseFileName = StringUtils.camelCase(baseName), controller = baseFileName + 'Controller', routeDef = {
                        templateUrl: routeConfig.getViewsDirectory() + viewId + '/' + baseName + '.html',
                        controller: controller,
                        controllerAs: ((controllerAs) ? controllerAs : ''),
                        secure: ((secure) ? secure : false)
                    };

                    routeDef.resolve = {
                        load: [
                            '$q', '$rootScope', function ($q, $rootScope) {
                                var dependencies = [routeConfig.getControllersDirectory() + viewId + '/' + controller + '.js'];
                                return resolveDependencies($q, $rootScope, dependencies);
                            }]
                    };

                    return routeDef;
                }, resolveDependencies = function ($q, $rootScope, dependencies) {
                    var defer = $q.defer();
                    require(dependencies, function () {
                        defer.resolve();
                        $rootScope.$apply();
                    });

                    return defer.promise;
                };

                return {
                    resolve: resolve
                };
            }(this.routeConfig);
        }
        /**
        * This is a mandatory Ng method for providers
        *
        * @access public static
        * @method: $get
        */
        TenshiRouteResolver.prototype.$get = function () {
            return this;
        };
        return TenshiRouteResolver;
    })();

    
    return TenshiRouteResolver;
});
