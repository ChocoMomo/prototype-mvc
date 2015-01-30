/**
 * Created by tommy on 30-1-15.
 */
interface ILogger {
	getInstance():any;
	log():void;
	info():void;
	warn():void;
	debug():void;
	error():void;
}

export = ILogger;