/**
* Created by tommy on 23-1-15.
*/
/// <reference path="../../typedef/typeDef.ts" />
define(["require", "exports", 'angular'], function(require, exports, angular) {
    //import TenshiRouteResolver  = require('lib/tenshi/router/TenshiRouteResolver');
    exports.app = angular.module("Tenshi", ['ngRoute', 'TenshiRouteResolverServices']);
});
//export var controllers:any  = angular.module('Tenshi.controllers',[]);
//export var directives       = angular.module('Tenshi.directives',[]);
