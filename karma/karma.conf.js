// Karma configuration
module.exports = function(config) {
	console.log(config);
	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: '',
		port: 8080,
		frameworks: ['jasmine'],
		singleRun: false,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		reporters: ["progress"],
		colors: true,

		preprocessors: {
			"../**/*.html": ["ng-html2js"],
			"../**/!(*.spec|*.unit|*.mock).js": ["coverage"]
		},
		files: [
			'../lib/angular.js',
			'../lib/angular-mocks.js',
			'../karma/karmaTest.unit.js',
			'../js/genColors.service.js',
			'../js/genColors.service.spec.js'
		],
		exclude: [],
		"customLaunchers": {
			"local": {},
			"browserStack": {
				"IE10": {
					"base": "IE",
					"x-ua-compatible": "IE=EmulateIE10"
				},
				"IE9": {
					"base": "IE",
					"x-ua-compatible": "IE=EmulateIE9"
				},
				"bs_firefox_mac": {
					"base": "BrowserStack",
					"browser": "firefox",
					"browser_version": "21.0",
					"os": "OS X",
					"os_version": "Mountain Lion"
				}
			}
		},
		browsers: {
			local: ["PhantomJS"],
			browserStack: ["bs_firefox_mac"]
		}
	});
};