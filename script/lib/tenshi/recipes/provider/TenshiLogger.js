///<reference path="../../../typedef/typeDef.ts" />
define(["require", "exports"], function(require, exports) {
    var TenshiLogger = (function () {
        /**
        * Injecting the $log dependancy
        *
        * @method: constructor
        */
        function TenshiLogger() {
            this.$get.$inject = ['$log'];
        }
        /**
        * This is a mandatory Ng method for providers
        *
        * @access public static
        * @method: $get
        */
        TenshiLogger.prototype.$get = function ($log) {
            Logger.$injectLog($log);
            return Logger;
        };
        return TenshiLogger;
    })();
    exports.TenshiLogger = TenshiLogger;

    var Logger = (function () {
        function Logger() {
        }
        /**
        * Retrieve the $log methods
        *
        * @access public static
        * @method: $injectLog
        */
        Logger.$injectLog = function ($log) {
            this._$log = $log;
            return this._$log;
        };

        /**
        * Retrieve the Logger instance
        *
        * @access public static
        * @method: getInstance
        */
        Logger.getInstance = function () {
            return new Logger();
        };

        /**
        * Search and replace the string
        *
        * @access public static
        * @method: supplant
        */
        Logger.supplant = function (str, o) {
            return str.replace(/\{([^{}]*)\}/g, function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            });
        };

        /**
        * Search and replace the string
        *
        * @access public static
        * @method: getFormattedTimestamp
        */
        Logger.getFormattedTimestamp = function (date) {
            return this.supplant('{0}:{1}:{2}:{3}', [
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
                date.getMilliseconds()
            ]);
        };

        /**
        * Actual logging with the Angular $log dependancy
        *
        * @access private
        * @method: _log
        */
        Logger.prototype._log = function (originalFn, args) {
            var now = Logger.getFormattedTimestamp(new Date());
            var message = '', supplantData = [];
            switch (args.length) {
                case 1:
                    message = Logger.supplant("{0} - {1}: {2}", [now, Logger, args[0]]);
                    break;
                case 3:
                    supplantData = args[2];
                    message = Logger.supplant("{0} - {1}::{2}(\'{3}\')", [now, Logger, args[0], args[1]]);
                    break;
                case 2:
                    if (typeof args[1] === 'string') {
                        message = Logger.supplant("{0} - {1}::{2}(\'{3}\')", [now, Logger, args[0], args[1]]);
                    } else {
                        supplantData = args[1];
                        message = Logger.supplant("{0} - {1}: {2}", [now, Logger, args[0]]);
                    }
                    break;
            }

            Logger._$log[originalFn].call(null, Logger.supplant(message, supplantData));
        };

        /**
        * Log
        *
        * @method: log
        */
        Logger.prototype.log = function () {
            this._log('log', arguments);
        };

        /**
        * Info
        *
        * @method: info
        */
        Logger.prototype.info = function () {
            this._log('info', arguments);
        };

        /**
        * Warn
        *
        * @method: warn
        */
        Logger.prototype.warn = function () {
            this._log('warn', arguments);
        };

        /**
        * Debug
        *
        * @method: debug
        */
        Logger.prototype.debug = function () {
            this._log('debug', arguments);
        };

        /**
        * Error
        *
        * @method: error
        */
        Logger.prototype.error = function () {
            this._log('error', arguments);
        };
        return Logger;
    })();
    exports.Logger = Logger;
});
