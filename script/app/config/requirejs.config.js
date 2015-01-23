/**
 * Created by tommy on 23-1-15.
 *
 * Tenshi Furēmuwāku
 */

var require = {
	baseUrl: 'script',
	waitSeconds: 15,
	paths: {
		jquery: 'lib/jquery/jquery-1.11.2.min',
		angular: 'lib/angular/angular.min',
		angularRoute: 'lib/angular/angular-route.min'

	},
	shim: {
		'angular' : {deps:['jquery'], 'exports' : 'angular' },
		'angularRoute' : {deps:['angular'], 'exports' : 'angularRoute' }
	}
};