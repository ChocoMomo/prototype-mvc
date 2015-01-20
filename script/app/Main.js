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
        app: 'app/app'
    },
    shim: {
        'jquery': { 'exports': 'jquery' },
        'angular': { deps: ['jquery'], 'exports': 'angular' },
        'angularRoute': { deps: ['angular'], 'exports': 'angularRoute' },
        'app': { deps: ['angular', 'angularRoute'] }
    },
    priority: [
        "jquery",
        "angular",
        "angularRoute"
    ]
});

require([
    'jquery',
    'angular',
    'app'
], function ($, angular, app) {
    'use strict';
    $(function () {
        var $html = $('html');
        angular.bootstrap($html, [app.app['name']]);
        $html.addClass('ng-app');
    });
});
