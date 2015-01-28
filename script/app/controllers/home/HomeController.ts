/**
 * Created by tommy on 20-1-15.
 */
/// <reference path="../../../lib/typedef/typeDef.ts" />

import TenshiModules = require('lib/tenshi/modules/TenshiModules');
import StringUtils = require('lib/tenshi/recipes/factory/StringUtils');

var injectParams = ['$scope', '$location', 'StringUtils'];
class HomeController {
    $scope:any;
    $location:any;
    StringUtils:any;

	constructor($scope:any, $location:any, StringUtils:StringUtils) {
		this.$scope = $scope;
		this.$location = $location;
		this.$scope.nameText = 'ik-ben-tommy dit is mijn angualr mvc';

		console.log(StringUtils.camelCase('t-s-g-t-t-'));
	}

    handleClick1() {
	    alert(this.$location.path().substring(1));
        alert(this.$scope.nameText + ' button clicked awesome');
    }

	handleClick2() {
//		alert(StringUtils.camelCase(this.$scope.nameText));
	}
}

HomeController.$inject = injectParams;
TenshiModules.app.register.controller("HomeController", HomeController);