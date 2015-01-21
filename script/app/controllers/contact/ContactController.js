/**
* Created by tommy on 20-1-15.
*/
/// <reference path="../../../lib/typedef/typeDef.ts" />
var injectParams = ['$scope'];
var ContactController = (function () {
    function ContactController($scope) {
        $scope.nameText = 'sdflsfsdl';
    }
    return ContactController;
})();

var app = angular.module("sampleApp", []);
ContactController.$inject = injectParams;
app.controller("ContactController", ContactController);
