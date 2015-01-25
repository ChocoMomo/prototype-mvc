/**
* Created by tommy on 20-1-15.
*/
/// <reference path="../../../lib/typedef/typeDef.ts" />
var injectParams = ['$scope'];
var HomeController = (function () {
    function HomeController($scope) {
        this.$scope = $scope;

        this.$scope.nameText = 'Tommy init';
    }
    HomeController.prototype.handleClick = function () {
        alert(this.$scope.nameText + ' button clicked awesome');
    };
    return HomeController;
})();
//var app = angular.module("sampleApp", []);
//HomeController.$inject = injectParams;
//sampleApp.controllers.controller("HomeController", HomeController);
