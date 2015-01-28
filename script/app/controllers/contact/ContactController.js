define(["require", "exports", 'lib/tenshi/modules/TenshiModules'], function(require, exports, TenshiModules) {
    var injectParams = ['$scope'];
    var ContactController = (function () {
        function ContactController($scope) {
            $scope.nameText = 'test';
        }
        return ContactController;
    })();

    ContactController.$inject = injectParams;
    TenshiModules.app.register.controller("ContactController", ContactController);
});
