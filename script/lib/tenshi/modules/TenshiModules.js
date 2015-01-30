/// <reference path="../../typedef/typeDef.ts" />
define(["require", "exports", 'angular'], function(require, exports, ng) {
    exports.app = ng.module("Tenshi", ['ngRoute', 'TenshiProviders']);
    exports.providers = ng.module('TenshiProviders', []);
});
