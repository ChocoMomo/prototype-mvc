interface ILogger {
	getInstance():any;
	log():void;
	info():void;
	warn():void;
	debug():void;
	error():void;
}

export = ILogger;