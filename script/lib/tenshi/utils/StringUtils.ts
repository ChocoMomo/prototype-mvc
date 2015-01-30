class StringUtils {

	/**
	 * Return camelcase name
	 *
	 * @method: camelCase
	 */
	public static camelCase(str:string, camelCaseFirst:boolean = true)
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