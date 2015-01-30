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

class Main {
	public _tenshi:Tenshi;

	constructor(sitemap) {
		$(()=>{
			this._tenshi = new Tenshi(sitemap);
			this._tenshi.bootstrap();
		})
    }
}