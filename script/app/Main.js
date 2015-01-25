/**
* Created by tommy on 23-1-15.
*/
/// <reference path="../lib/typedef/typeDef.ts" />
define(["require", "exports", 'lib/tenshi/core/Tenshi'], function(require, exports, Tenshi) {
    //require.config({
    //	baseUrl: 'script',
    //	paths: {
    //		jquery: 'lib/jquery/jquery-1.11.2.min',
    //		angular: 'lib/angular/angular.min',
    //		angularRoute: 'lib/angular/angular-route.min',
    //
    //		core: 'app/app',
    //		modules: 'app/modules',
    //		RouteResolver: 'app/services/RouteResolver'
    //	},
    //	shim: {
    //		'angular' : {deps:['jquery'], 'exports' : 'angular' },
    //		'angularRoute' : {deps:['angular'], 'exports' : 'angularRoute' },
    //
    //		'core' : {deps:['angular', 'angularRoute'] },
    //		'modules' : {deps:['angular', 'angularRoute', 'core'] },
    //		'RouteResolver' : {deps:['angular', 'angularRoute', 'core'] }
    //	}
    //});
    var sitemap = 'app/config/TenshiSitemap';

    require([
        sitemap,
        "lib/externals"
    ], function (sitemap) {
        new Main(sitemap);
    });

    var Main = (function () {
        function Main(sitemap) {
            this._tenshi = new Tenshi();
            this._tenshi.init();
        }
        Main.prototype.init = function () {
        };
        return Main;
    })();
});
//require( [
//	'jquery',
//	'angular',
//
//	'core',
//	'modules',
//	'RouteResolver'
//], function($, angular, app) {
//	'use strict';
//	$(function () {
//		var $html = $('html');
//		angular.bootstrap($html, [app.app['name']]);
//		$html.addClass('ng-app');
//	});
//});
