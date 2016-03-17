/// <reference path="../../../lib/typedef/typeDef.ts" />
import TenshiModules = require('lib/tenshi/modules/TenshiModules');

var injectParams = ['$scope', '$location'];
class ContactController {
    private $location:any;

	constructor($scope:any, $location:any) {
		$scope.nameText = 'test';

        this.$location = $location;
	}

    handleClick() {
        alert("Route:: " + this.$location.path().substring(1));
    }
}

ContactController.$inject = injectParams;
TenshiModules.app.register.controller("ContactController", ContactController);