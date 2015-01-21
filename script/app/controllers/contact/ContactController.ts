/**
 * Created by tommy on 20-1-15.
 */
/// <reference path="../../../lib/typedef/typeDef.ts" />

var injectParams = ['$scope'];
class ContactController {

	constructor($scope:any) {

		$scope.nameText = 'sdflsfsdl';

	}
}

var app = angular.module("sampleApp", []);
ContactController.$inject = injectParams;
app.controller("ContactController", ContactController);