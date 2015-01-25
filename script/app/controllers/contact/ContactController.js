/**
* Created by tommy on 20-1-15.
*/
/// <reference path="../../../lib/typedef/typeDef.ts" />
var injectParams = ['$scope'];
var ContactController = (function () {
    function ContactController($scope) {
        $scope.nameText = 'test';
    }
    return ContactController;
})();
//ContactController.$inject = injectParams;
//sampleApp.controllers.controller("ContactController", ContactController);
