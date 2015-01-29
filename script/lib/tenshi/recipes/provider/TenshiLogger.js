/**
* Created by tommy on 29-1-15.
*/
///<reference path="../../../typedef/typeDef.ts" />
define(["require", "exports"], function(require, exports) {
    var TenshiLogger = (function () {
        function TenshiLogger() {
            this._isEnabled = true;
            this.$get.$inject = ['$log'];
        }
        TenshiLogger.prototype.enabled = function (_isEnabled) {
            this._isEnabled = !!_isEnabled;
        };

        TenshiLogger.prototype.$get = function ($log) {
            //		var Logger = function(context) {
            //			this.context = context;
            //		};
            //		Logger.getInstance = function(context) {
            //			return new Logger(context);
            //		};
            //		return Logger;
        };
        return TenshiLogger;
    })();
    exports.TenshiLogger = TenshiLogger;
});
