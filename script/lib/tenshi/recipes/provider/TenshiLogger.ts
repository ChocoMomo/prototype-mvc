/**
 * Created by tommy on 29-1-15.
 */
///<reference path="../../../typedef/typeDef.ts" />

export class TenshiLogger implements ng.IServiceProvider {
	private _context:any;
	private _isEnabled:boolean = true;

	constructor() {
		this.$get.$inject = ['$log'];
	}

	enabled(_isEnabled) {
		this._isEnabled = !!_isEnabled;
	}

	$get($log:ng.auto.IInjectorService) {
//		var Logger = function(context) {
//			this.context = context;
//		};

//		Logger.getInstance = function(context) {
//			return new Logger(context);
//		};

//		return Logger;
	}
}