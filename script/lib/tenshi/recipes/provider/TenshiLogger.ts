/**
 * Created by tommy on 29-1-15.
 */
///<reference path="../../../typedef/typeDef.ts" />

export class TenshiLogger implements ng.IServiceProvider {

	/**
	 * Injecting the $log dependancy
	 *
	 * @method: constructor
	 */
	constructor() {
		this.$get.$inject = ['$log'];
	}

	/**
	 * This is a mandatory Ng method for providers
	 *
	 * @access public static
	 * @method: $get
	 */
	$get($log:ng.auto.IInjectorService) {
		Logger.$injectLog($log);
		return Logger;
	}
}

export class Logger {
	private static _$log:any;

	/**
	 * Retrieve the $log methods
	 *
	 * @access public static
	 * @method: $injectLog
	 */
	public static $injectLog($log) {
		this._$log = $log;
		return this._$log;
	}

	/**
	 * Retrieve the Logger instance
	 *
	 * @access public static
	 * @method: getInstance
	 */
	public static getInstance() {
		return new Logger();
	}

	/**
	 * Search and replace the string
	 *
	 * @access public static
	 * @method: supplant
	 */
	public static supplant(str, o) {
		return str.replace(
			/\{([^{}]*)\}/g,
			function (a, b) {
				var r = o[b];
				return typeof r === 'string' || typeof r === 'number' ? r : a;
			}
		);
	}

	/**
	 * Search and replace the string
	 *
	 * @access public static
	 * @method: getFormattedTimestamp
	 */
	public static getFormattedTimestamp(date) {
		return this.supplant('{0}:{1}:{2}:{3}', [
			date.getHours(),
			date.getMinutes(),
			date.getSeconds(),
			date.getMilliseconds()
		]);
	}

	/**
	 * Actual logging with the Angular $log dependancy
	 *
	 * @access private
	 * @method: _log
	 */
	private _log(originalFn, args) {
		var now  = Logger.getFormattedTimestamp(new Date());
		var message = '', supplantData = [];
		switch (args.length) {
			case 1:
				message = Logger.supplant("{0} - {1}: {2}", [ now, Logger, args[0] ]);
				break;
			case 3:
				supplantData = args[2];
				message = Logger.supplant("{0} - {1}::{2}(\'{3}\')", [ now, Logger, args[0], args[1] ]);
				break;
			case 2:
				if (typeof args[1] === 'string') {
					message = Logger.supplant("{0} - {1}::{2}(\'{3}\')", [ now, Logger, args[0], args[1] ]);
				} else {
					supplantData = args[1];
					message = Logger.supplant("{0} - {1}: {2}", [ now, Logger, args[0] ]);
				}
				break;
		}

		Logger._$log[originalFn].call(null, Logger.supplant(message, supplantData));
	}

	/**
	 * Log
	 *
	 * @method: log
	 */
	log() {
		this._log('log', arguments);
	}

	/**
	 * Info
	 *
	 * @method: info
	 */
	info() {
		this._log('info', arguments);
	}

	/**
	 * Warn
	 *
	 * @method: warn
	 */
	warn() {
		this._log('warn', arguments);
	}

	/**
	 * Debug
	 *
	 * @method: debug
	 */
	debug() {
		this._log('debug', arguments);
	}

	/**
	 * Error
	 *
	 * @method: error
	 */
	error() {
		this._log('error', arguments);
	}
}