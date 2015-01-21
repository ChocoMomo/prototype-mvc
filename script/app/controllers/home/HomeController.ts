/**
 * Created by tommy on 20-1-15.
 */
/// <reference path="../../../lib/typedef/typeDef.ts" />

var injectParams = ['$scope'];
class HomeController {

	constructor($scope:any) {

		$scope.nameText = 'sdflsfsdl';

	}
}

var app = angular.module("sampleApp", []);
HomeController.$inject = injectParams;
app.controller("HomeController", HomeController);