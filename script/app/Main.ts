/**
 * Created by tommy on 23-1-15.
 */
/// <reference path="../lib/typedef/typeDef.ts" />
var sitemap = 'app/config/TenshiSitemap';

require([
	sitemap,
	"lib/externals"
],
	function (sitemap) {
		new Main(sitemap);
	});

import Tenshi = require('lib/tenshi/core/Tenshi');
//import TenshiRouteResolver = require('lib/tenshi/core/Tenshi');

class Main {

	public _tenshi:Tenshi;

	constructor(sitemap) {
		$(()=>{
			this._tenshi = new Tenshi();
			this._tenshi.bootstrap();
		})
    }
}

//var servicesApp:any = angular.module('TenshiRouteResolverServices', []);
//Must be a provider since it will be injected into module.config()
//servicesApp.provider('TenshiRouteResolver', TenshiRouteResolver);