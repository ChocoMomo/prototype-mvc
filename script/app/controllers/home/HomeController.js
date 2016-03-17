/// <reference path="../../../lib/typedef/typeDef.ts" />
define(["require", "exports", 'lib/tenshi/modules/TenshiModules', 'lib/tenshi/utils/StringUtils'], function(require, exports, TenshiModules, StringUtils) {
    var injectParams = ['$scope', '$location', 'TenshiLogger'];
    var HomeController = (function () {
        function HomeController($scope, $location, TenshiLogger) {
            this.$scope = $scope;
            this.$location = $location;

            this.$scope.nameText = 'ik-ben-tommy dit is mijn angular mvc';

            var logger = TenshiLogger.getInstance();
            logger.log('This is a log');
            logger.warn('warn', 'This is a warn');

            //		logger.error('This is a {0} error! {1}', [ 'big', 'just kidding' ]);
            logger.debug('debug', 'This is a debug for line {0}', [8]);
        }
        HomeController.prototype.handleClick1 = function () {
            alert("Route:: " + this.$location.path().substring(1));
            alert(this.$scope.nameText + ' button clicked awesome');
        };

        HomeController.prototype.handleClick2 = function () {
            alert(StringUtils.camelCase(this.$scope.nameText));
        };
        return HomeController;
    })();

    HomeController.$inject = injectParams;
    TenshiModules.app.register.controller("HomeController", HomeController);
});
