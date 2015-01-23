/// <reference path="../lib/typedef/typeDef.ts" />
var sampleApp;
(function (sampleApp) {
    sampleApp.app = angular.module("sampleApp", ['ngRoute', 'RouteResolverServices']);
    sampleApp.controllers = angular.module('sampleApp.controllers', []);
    sampleApp.directives = angular.module('sampleApp.directives', []);

    sampleApp.app.config([
        '$routeProvider', 'RouteResolverProvider',
        function ($routeProvider, RouteResolverProvider) {
            var route = RouteResolverProvider.route;

            $routeProvider.when('/home', route.resolve('Home', 'home', 'vm')).when('/contact', route.resolve('Contact', 'contact', 'vm')).otherwise({ redirectTo: '/home' });
        }]);
})(sampleApp || (sampleApp = {}));
