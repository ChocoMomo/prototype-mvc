/// <reference path="../lib/typedef/typeDef.ts" />
define(["require", "exports"], function(require, exports) {
    exports.app = angular.module("sampleApp", ['ngRoute', 'RouteResolverServices']);

    exports.app.config([
        '$routeProvider', 'RouteResolverProvider',
        function ($routeProvider, RouteResolverProvider) {
            var route = RouteResolverProvider.route;

            $routeProvider.when('/home', route.resolve('Home', 'home', 'vm')).when('/contact', route.resolve('Contact', 'contact', 'vm')).otherwise({ redirectTo: '/home' });
        }]);
});
