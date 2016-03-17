define(["require", "exports", 'lib/tenshi/modules/TenshiModules'], function(require, exports, TenshiModules) {
    var injectParams = ['$scope', '$location'];
    var ContactController = (function () {
        function ContactController($scope, $location) {
            $scope.nameText = 'test';

            this.$location = $location;
        }
        ContactController.prototype.handleClick = function () {
            alert("Route:: " + this.$location.path().substring(1));
        };
        return ContactController;
    })();

    ContactController.$inject = injectParams;
    TenshiModules.app.register.controller("ContactController", ContactController);
});
