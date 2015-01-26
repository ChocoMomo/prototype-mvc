/**
* Created by tommy on 23-1-15.
*
* Tenshi Furēmuwāku
*/
define(["require", "exports", 'angular', 'lib/tenshi/modules/TenshiModules'], function(require, exports, angular, TenshiModules) {
    var Tenshi = (function () {
        function Tenshi() {
        }
        Tenshi.prototype.bootstrap = function () {
            this.config();
            var $html = $('html');
            angular.bootstrap($html, [TenshiModules.app['name']]);
            $html.addClass('ng-app');
        };

        Tenshi.prototype.config = function () {
            console.log("Angular Config Routing");

            TenshiModules.app.config([
                '$routeProvider', 'TenshiRouteResolverProvider',
                function ($routeProvider, TenshiRouteResolverProvider) {
                    var route = TenshiRouteResolverProvider.route;

                    $routeProvider.when('/home', route.resolve('Home', 'home', 'vm')).when('/contact', route.resolve('Contact', 'contact', 'vm')).otherwise({ redirectTo: '/home' });
                }]);
        };
        return Tenshi;
    })();

    
    return Tenshi;
});
//var servicesApp:any = angular.module('TenshiRouteResolverServices', []);
//
////Must be a provider since it will be injected into module.config()
//servicesApp.provider('TenshiRouteResolver', TenshiRouteResolver);
