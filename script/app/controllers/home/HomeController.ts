/**
 * Created by tommy on 20-1-15.
 */
/// <reference path="../../../lib/typedef/typeDef.ts" />

var injectParams = ['$scope', '$location'];
class HomeController {
    $scope:any;
    $location:any;

	constructor($scope:any, $location:any) {
		this.$scope = $scope;
		this.$location = $location;

        this.$scope.nameText = 'Tommy init';
	}

    handleClick() {
	    alert(this.$location.path().substring(1));
        alert(this.$scope.nameText + ' button clicked awesome');
    }
}

//var app = angular.module("sampleApp", []);
//HomeController.$inject = injectParams;
//sampleApp.controllers.controller("HomeController", HomeController);