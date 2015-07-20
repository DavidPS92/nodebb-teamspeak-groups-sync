(function(module) {
	"use strict";

	var Plugin = {};

	function renderTSS(req, res, next) {
		res.render('teamspeak', {});
	}

	Plugin.init = function(params, callback) {
		var app = params.router,
			middleware = params.middleware,
			controllers = params.controllers;

			app.get('/teamspeak', middleware.buildHeader, renderTSS);
			app.get('/api/teamspeak', renderTSS);	

		callback();
	};

	module.exports = Plugin;
}(module));
