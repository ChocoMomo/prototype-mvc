/**
 * Created by tommy on 23-1-15.
 */
module TenshiModules {
	export var app = angular.module("Tenshi", ['ngRoute', 'RouteResolverServices']);
	export var controllers = angular.module('Tenshi.controllers',[]);
	export var directives = angular.module('Tenshi.directives',[]);
}