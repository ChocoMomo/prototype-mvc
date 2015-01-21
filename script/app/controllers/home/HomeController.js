/**
* Created by tommy on 20-1-15.
*/
/// <reference path="../../../lib/typedef/typeDef.ts" />
var injectParams = ['$scope'];
var HomeController = (function () {
    function HomeController($scope) {
        $scope.nameText = 'sdflsfsdl';
    }
    return HomeController;
})();

var app = angular.module("sampleApp", []);
HomeController.$inject = injectParams;
app.controller("HomeController", HomeController);
