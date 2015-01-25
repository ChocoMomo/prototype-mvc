/**
 * Created by tommy on 20-1-15.
 */
/// <reference path="../../../lib/typedef/typeDef.ts" />

var injectParams = ['$scope'];
class HomeController {
    $scope:any;

	constructor($scope:any) {
		this.$scope = $scope;

        this.$scope.nameText = 'Tommy init';
	}

    handleClick() {
        alert(this.$scope.nameText + ' button clicked awesome');
    }
}

//var app = angular.module("sampleApp", []);
//HomeController.$inject = injectParams;
//sampleApp.controllers.controller("HomeController", HomeController);