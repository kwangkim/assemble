/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2014 Upstage.
 * Licensed under the MIT License (MIT).
 */

var async = require('async');

var config = require('../config');
var notifier = require('./notifier');

var stages = config.plugins.stages;

module.exports = function(assemble) {

	return function(next) {
		assemble.log.info('Running render pages steps');

		var params = {};
		var notify = notifier(assemble, params);

		async.series([
				notify(stages.renderBeforePages),
				function (done) {
					assemble.log.info('Doing some render pages work here.');
					done();
				},
				notify(stages.renderAfterPages)
			],
			next
		);
	};
};