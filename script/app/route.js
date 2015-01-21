/**
* Created by tommy on 21-1-15.
*/
/// <reference path="../lib/typedef/typeDef.ts" />
define(["require", "exports", 'app'], function(require, exports, app) {
    app.app.config([
        '$routeProvider', 'RouteResolverProvider',
        function ($routeProvider, RouteResolverProvider) {
            var route = RouteResolverProvider.route;

            $routeProvider.when('/home', route.resolve('Home', 'home', 'vm')).when('/contact', route.resolve('Contact', 'contact', 'vm')).otherwise({ redirectTo: '/home' });
        }]);
});
