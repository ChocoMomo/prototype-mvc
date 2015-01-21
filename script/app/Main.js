/**
* Created by tommy on 19-1-15.
*/
/// <reference path="../lib/typedef/typeDef.ts" />
require.config({
    baseUrl: 'script',
    paths: {
        jquery: 'lib/jquery/jquery-1.11.2.min',
        angular: 'lib/angular/angular.min',
        angularRoute: 'lib/angular/angular-route.min',
        app: 'app/App',
        route: 'app/route',
        routeResolver: 'app/services/RouteResolver'
    },
    shim: {
        'angular': { deps: ['jquery'], 'exports': 'angular' },
        'angularRoute': { deps: ['angular'], 'exports': 'angularRoute' },
        'app': { deps: ['angular', 'angularRoute'], 'exports': 'app' },
        'route': { deps: ['angular', 'angularRoute'], 'exports': 'route' },
        'routeResolver': { deps: ['angular', 'angularRoute', 'app'], 'exports': 'routeResolver' }
    }
});

require([
    'jquery',
    'angular',
    'app',
    'route',
    'routeResolver'
], function ($, angular, app) {
    'use strict';
    $(function () {
        var $html = $('html');
        angular.bootstrap($html, [app.app['name']]);
        $html.addClass('ng-app');
    });
});
