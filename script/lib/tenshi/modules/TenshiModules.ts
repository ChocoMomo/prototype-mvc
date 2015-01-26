/**
 * Created by tommy on 23-1-15.
 */
/// <reference path="../../typedef/typeDef.ts" />

import angular              = require('angular');
//import TenshiRouteResolver  = require('lib/tenshi/router/TenshiRouteResolver');

export var app:any          = angular.module("Tenshi", ['ngRoute', 'TenshiRouteResolverServices']);
export var controllers:any  = angular.module('Tenshi.controllers',[]);
export var directives       = angular.module('Tenshi.directives',[]);