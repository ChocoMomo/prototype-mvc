/**
 * Created by tommy on 20-1-15.
 */
/// <reference path="../../../lib/typedef/typeDef.ts" />
import TenshiModules = require('lib/tenshi/modules/TenshiModules');

var injectParams = ['$scope'];
class ContactController {

	constructor($scope:any) {

		$scope.nameText = 'test';

	}
}

ContactController.$inject = injectParams;
TenshiModules.app.register.controller("ContactController", ContactController);