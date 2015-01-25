/**
* Created by tommy on 23-1-15.
*/
define(["require", "exports"], function(require, exports) {
    /// <reference path="../../typedef/typeDef.ts" />
    exports.app = angular.module("Tenshi", ['ngRoute', 'RouteResolverServices']);
    exports.controllers = angular.module('Tenshi.controllers', []);
    exports.directives = angular.module('Tenshi.directives', []);
});
//export = TenshiModules;
