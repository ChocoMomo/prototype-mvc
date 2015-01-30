define(["require", "exports"], function(require, exports) {
    var StringUtils = (function () {
        function StringUtils() {
        }
        /**
        * Return camelcase name
        *
        * @method: camelCase
        */
        StringUtils.camelCase = function (str, camelCaseFirst) {
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
