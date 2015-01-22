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
        core: 'app/app',
        modules: 'app/modules',
        routeResolver: 'app/services/RouteResolver'
    },
    shim: {
        'angular': { deps: ['jquery'], 'exports': 'angular' },
        'angularRoute': { deps: ['angular'], 'exports': 'angularRoute' },
        'core': { deps: ['angular', 'angularRoute'] },
        'modules': { deps: ['angular', 'angularRoute', 'core'] },
        'routeResolver': { deps: ['angular', 'angularRoute', 'core'] }
    }
});

require([
    'jquery',
    'angular',
    'core',
    'modules',
    'routeResolver'
], function ($, angular, app) {
    'use strict';
    $(function () {
        var $html = $('html');
        angular.bootstrap($html, [app.app['name']]);
        $html.addClass('ng-app');
    });
});
