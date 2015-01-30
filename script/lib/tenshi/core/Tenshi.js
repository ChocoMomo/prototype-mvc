/**
* Created by tommy on 23-1-15.
*
* Tenshi Furēmuwāku
*/
define(["require", "exports", 'angular', 'lib/tenshi/modules/TenshiModules', 'lib/tenshi/recipes/provider/TenshiRouteResolver', 'lib/tenshi/recipes/provider/TenshiLogger'], function(require, exports, ng, TenshiModules, TenshiRouteResolver, TenshiLogger) {
    //import StringUtils          = require('lib/tenshi/recipes/factory/StringUtils');
    var Tenshi = (function () {
        function Tenshi(sitemap) {
            this._sitemap = sitemap;
        }
        /**
        * Bootstrap the application
        *
        * @access private
        */
        Tenshi.prototype.bootstrap = function () {
            this.config();
            var $html = $('html');
            angular.bootstrap($html, [TenshiModules.app['name']]);
            $html.addClass('ng-app');
        };

        /**
        * Set up the core configuration
        *
        * @access private
        */
        Tenshi.prototype.config = function () {
            var _this = this;
            this.registerProviders();
            TenshiModules.app.config([
                '$routeProvider', 'TenshiRouteResolverProvider', '$controllerProvider',
                '$compileProvider', '$filterProvider', '$provide', 'TenshiLoggerProvider',
                function ($routeProvider, TenshiRouteResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, TenshiLoggerProvider) {
                    // Register the Recipes
                    TenshiModules.app.register = {
                        controller: $controllerProvider.register,
                        directive: $compileProvider.directive,
                        filter: $filterProvider.register,
                        factory: $provide.factory,
                        service: $provide.service
                    };

                    var route = TenshiRouteResolverProvider.route;

                    ng.forEach(_this._sitemap.views, function (r) {
                        //				$routeProvider.when('/' + r.id, route.resolve(r.id, r.id, 'vm'));
                    });

                    $routeProvider.when('/home', route.resolve('Home', 'home', 'vm'));

                    //			$routeProvider.when('/contact', route.resolve('Contact', 'contact', 'vm'));
                    $routeProvider.otherwise({ redirectTo: '/home' });
                    //			this.registerServices();
                }]);
        };

        /**
        * Register providers
        *
        * @access private
        */
        Tenshi.prototype.registerProviders = function () {
            ////Must be a provider since it will be injected into module.config()
            TenshiModules.providers.provider('TenshiRouteResolver', TenshiRouteResolver);
            TenshiModules.providers.provider('TenshiLogger', TenshiLogger.TenshiLogger);
        };

        /**
        * Register services
        *
        * @access private
        */
        Tenshi.prototype.registerServices = function () {
            //		TenshiModules.app.register.factory('StringUtils', ()=> {
            //			return new StringUtils()
            //		});
        };
        return Tenshi;
    })();

    
    return Tenshi;
});
