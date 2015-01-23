/**
 * Created by tommy on 23-1-15.
 */
	/// <reference path="../lib/typedef/typeDef.ts" />

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

require([
	"lib/externals"
],
	function ()
	{
		//		new Main(siteconfig);
	});


import Tenshi = require('lib/tenshi/core/Tenshi');

class Main {

}


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
