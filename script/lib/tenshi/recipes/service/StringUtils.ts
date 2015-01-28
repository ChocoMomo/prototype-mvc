/**
 * Created by tommy on 28-1-15.
 */

import TenshiModules = require('lib/tenshi/modules/TenshiModules');

class StringUtils {
	public camelCase(str:string, camelCaseFirst:boolean = true)
	{
		return str.replace(/(^[a-z]|\-[a-z])/g, function (match, submatch, offset)
		{
			if (camelCaseFirst == false && offset == 0) {
				return match.replace(/-/, '').toLowerCase();
			} else {
				return match.replace(/-/, '').toUpperCase();
			}
		});
	}
}

export = StringUtils;