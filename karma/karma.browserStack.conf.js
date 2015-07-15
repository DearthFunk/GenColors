// Karma configuration
// Generated on Tue Nov 18 2014 14:51:13 GMT-0500 (Eastern Standard Time)
var karmaCreds = require('./karmaCreds.json');
var karmaConfDefaults = require('./karma.conf.defaults.json');

module.exports = function(config) {
	config.set({
		basePath: 				karmaConfDefaults.basePath,		
		browserStack: {
			username: 			karmaCreds.browserStack.username,
			accessKey: 			karmaCreds.browserStack.accessKey
		},		
		frameworks: 			karmaConfDefaults.frameworks,
		preprocessors: 			karmaConfDefaults.preprocessors,
		files: 					karmaConfDefaults.files,
		ngHtml2JsPreprocessor: 	karmaConfDefaults.ngHtml2JsPreprocessor,
		exclude: 				karmaConfDefaults.exclude,
		reporters: 				karmaConfDefaults.reporters,
		port: 					karmaConfDefaults.port,
		colors:					karmaConfDefaults.colors,
		logLevel:				config.LOG_INFO,
		autoWatch: 				karmaConfDefaults.autoWatch,
		singleRun: 				karmaConfDefaults.singleRun,	
		customLaunchers: 		karmaConfDefaults.customLaunchers.browserStack,
		browsers: 				karmaConfDefaults.browsers.browserStack
	});
};
