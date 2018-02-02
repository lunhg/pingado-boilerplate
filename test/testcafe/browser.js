let path = require('path');

require('testcafe')({
    controlPanelPort: 1337,
    servicePort1: 1338,
    hostname: '127.0.0.1',
    testsDir: __dirname,
    reportsPath: path.join(__dirname, 'reports'),
    browsers: {
	'Midori': {path: '/usr/bin/midori'},
	'Chromium': {path: '/usr/bin/chromium-browser'}
    }
}).then(function(testcafe){
    let runner = testcafe.createRunner();
    runner.src([
        path.join(__dirname, 'main.js')
    ]).browsers(['Chromium']).run().then(function(failedCount){
	console.log('Tests failed: ' + failedCount);
	testcafe.close();
    }).catch(function(err){
	console.log(err);
    });
});
