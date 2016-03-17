/// <reference path="../../../lib/typedef/typeDef.ts" />

import TenshiModules = require('lib/tenshi/modules/TenshiModules');
import StringUtils = require('lib/tenshi/utils/StringUtils');
import ILogger = require('lib/tenshi/interface/ILogger');

var injectParams = ['$scope', '$location', 'TenshiLogger'];
class HomeController {
    $scope:any;
    $location:any;

	constructor($scope:any, $location:any, TenshiLogger:ILogger) {
		this.$scope = $scope;
		this.$location = $location;

		this.$scope.nameText = 'ik-ben-tommy dit is mijn angular mvc';

		var logger = TenshiLogger.getInstance();
		logger.log('This is a log');
		logger.warn('warn', 'This is a warn');
//		logger.error('This is a {0} error! {1}', [ 'big', 'just kidding' ]);
		logger.debug('debug', 'This is a debug for line {0}', [ 8 ]);
	}

    handleClick1() {
	    alert("Route:: " + this.$location.path().substring(1));
        alert(this.$scope.nameText + ' button clicked awesome');
    }

	handleClick2() {
		alert(StringUtils.camelCase(this.$scope.nameText));
	}
}

HomeController.$inject = injectParams;
TenshiModules.app.register.controller("HomeController", HomeController);