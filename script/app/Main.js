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

    //import TenshiRouteResolver = require('lib/tenshi/core/Tenshi');
    var Main = (function () {
        function Main(sitemap) {
            var _this = this;
            $(function () {
                _this._tenshi = new Tenshi();
                _this._tenshi.bootstrap();
            });
        }
        return Main;
    })();
});
//var servicesApp:any = angular.module('TenshiRouteResolverServices', []);
//Must be a provider since it will be injected into module.config()
//servicesApp.provider('TenshiRouteResolver', TenshiRouteResolver);
