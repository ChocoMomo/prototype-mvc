define(["require", "exports", 'lib/tenshi/core/Tenshi'], function(require, exports, Tenshi) {
    /**
    * Created by tommy on 23-1-15.
    */
    /// <reference path="../lib/typedef/typeDef.ts" />
    var sitemap = 'app/config/TenshiSitemap';

    require([
        sitemap,
        "lib/externals"
    ], function (sitemap) {
        new Main(sitemap);
    });

    var Main = (function () {
        function Main(sitemap) {
            var _this = this;
            $(function () {
                _this._tenshi = new Tenshi(sitemap);
                _this._tenshi.bootstrap();
            });
        }
        return Main;
    })();
});
