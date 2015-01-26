define(["require", "exports", 'lib/tenshi/core/Tenshi'], function(require, exports, Tenshi) {
    /**
    * Created by tommy on 23-1-15.
    */
    /// <reference path="../lib/typedef/typeDef.ts" />
    var sitemap = 'app/config/TenshiSitemap';

    require([
        sitemap,
        "lib/externals"
    ], function (sitemap) {
        new Main(sitemap);
    });

    var TenshiRouteResolver = (function () {
        function TenshiRouteResolver() {
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
        TenshiRouteResolver.prototype.$get = function () {
            return this;
        };
        return TenshiRouteResolver;
    })();

    var servicesApp = angular.module('TenshiRouteResolverServices', []);

    //Must be a provider since it will be injected into module.config()
    servicesApp.provider('TenshiRouteResolver', TenshiRouteResolver());

    var Main = (function () {
        function Main(sitemap) {
            var _this = this;
            $(function () {
                _this._tenshi = new Tenshi();
                _this._tenshi.bootstrap();
            });
        }
        return Main;
    })();
});
