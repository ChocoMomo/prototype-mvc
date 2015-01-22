/**
 * Created by tommy on 20-1-15.
 */
/// <reference path="../../../lib/typedef/typeDef.ts" />

var injectParams = ['$scope'];
class ContactController {

	constructor($scope:any) {

		$scope.nameText = 'test';

	}
}

ContactController.$inject = injectParams;
sampleApp.controllers.controller("ContactController", ContactController);