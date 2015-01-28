/**
 * Created by tommy on 23-1-15.
 */
/// <reference path="../../typedef/typeDef.ts" />

import ng                = require('angular');
export var app:any       = ng.module("Tenshi", ['ngRoute', 'TenshiProviders']);
export var providers:any = ng.module('TenshiProviders', []);