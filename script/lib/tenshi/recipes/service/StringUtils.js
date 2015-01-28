/**
* Created by tommy on 28-1-15.
*/
define(["require", "exports"], function(require, exports) {
    var StringUtils = (function () {
        function StringUtils() {
        }
        StringUtils.prototype.camelCase = function (str, camelCaseFirst) {
            if (typeof camelCaseFirst === "undefined") { camelCaseFirst = true; }
            return str.replace(/(^[a-z]|\-[a-z])/g, function (match, submatch, offset) {
                if (camelCaseFirst == false && offset == 0) {
                    return match.replace(/-/, '').toLowerCase();
                } else {
                    return match.replace(/-/, '').toUpperCase();
                }
            });
        };
        return StringUtils;
    })();

    
    return StringUtils;
});
