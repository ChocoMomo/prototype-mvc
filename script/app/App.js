/// <reference path="../lib/typedef/typeDef.ts" />
define(["require", "exports"], function(require, exports) {
    exports.app = angular.module("sampleApp", ['ngRoute', 'RouteResolverServices']);
});
