///<reference path="../../../typedef/typeDef.ts" />
define(["require", "exports"], function(require, exports) {
    var TenshiRouterService = (function () {
        function TenshiRouterService() {
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
            this.route = function (routeConfig) {
                var resolve = function (baseName, viewId, controllerAs, secure) {
                    var routeDef = {};
                    var baseFileName = baseName.charAt(0).toLowerCase() + baseName.substr(1);

                    routeDef.templateUrl = routeConfig.getViewsDirectory() + viewId + '/' + baseFileName + '.html';
                    routeDef.controller = baseName + 'Controller';

                    if (controllerAs)
                        routeDef.controllerAs = controllerAs;
                    routeDef.secure = (secure) ? secure : false;
                    routeDef.resolve = {
                        load: [
                            '$q', '$rootScope', function ($q, $rootScope) {
                                var dependencies = [routeConfig.getControllersDirectory() + viewId + '/' + baseName + 'Controller.js'];
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
        TenshiRouterService.prototype.$get = function () {
            return this;
        };
        return TenshiRouterService;
    })();
    exports.TenshiRouterService = TenshiRouterService;
});
