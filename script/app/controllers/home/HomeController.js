/**
* Created by tommy on 20-1-15.
*/
/// <reference path="../../../lib/typedef/typeDef.ts" />
var injectParams = ['$scope', '$location'];
var HomeController = (function () {
    function HomeController($scope, $location) {
        this.$scope = $scope;
        this.$location = $location;

        this.$scope.nameText = 'Tommy init';
    }
    HomeController.prototype.handleClick = function () {
        alert(this.$location.path().substring(1));
        alert(this.$scope.nameText + ' button clicked awesome');
    };
    return HomeController;
})();
//var app = angular.module("sampleApp", []);
//HomeController.$inject = injectParams;
//sampleApp.controllers.controller("HomeController", HomeController);
