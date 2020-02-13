var isCi = require('is-ci');

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		plugins: [
			require('karma-jasmine'),
			isCi ? require('karma-phantomjs-launcher') : require('karma-chrome-launcher'),
			require('karma-coverage-istanbul-reporter'),
			require('karma-coverage'),
			require('karma-jasmine-html-reporter'),
			require('karma-mocha-reporter'),
			require('karma-junit-reporter'),
			require('@angular-devkit/build-angular/plugins/karma')
		],
		files: [
			'./karma.globals.js'
		],
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		coverageIstanbulReporter: {
			reports: ['html', 'json', 'cobertura', 'clover'],
			fixWebpackSourcePaths: true
		},
		angularCli: {
			environment: 'dev'
		},
		reporters: ['progress', 'kjhtml', 'mocha', 'coverage', 'junit'],
		coverageReporter: {
			type: 'text-summary'
		},
		junitReporter: {
			outputDir: 'system-test/target/surefire-reports',
			outputFile: 'TEST-karma.xml',
			suite: '',
			useBrowserName: false
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: !isCi,
		browserNoActivityTimeout: 20000,
		browsers: [
			isCi ?
				'PhantomJS' :
				'Chrome'
		],
		customLaunchers: {
			ChromeHeadless: {
				base: 'Chrome',
				flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222']
			}
		},
		singleRun: isCi
	});
};
