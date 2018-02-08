const Pingado = require('pingado-server');
const path = require('path');
const foreach = require('foreach');

let onInit = function(){
    return Pingado.database('mongodb').then(function(conn){
	return {connection:conn}
    })
}

let onConfig = function(suite){
    return Pingado.logger().then(function(logger){
	logger.warn('Pingado suite initialized')
	suite.logger = logger;
	return logger
    }).then(Pingado.app).then(function(app){
	let routes = require('./routes/main')
	foreach(routes, function(paths, method, o){
	    foreach(paths, function(fn, path, oo){
		suite.logger.warn('Configuring '+method+' '+path)
		let METHOD = method.toLowerCase()
		app[METHOD](path, fn)
	    })
	});
	suite.app = app;
	return suite;
    })
}

let onServe = function(suite){
    suite.logger.warn('Pingado app initialized')
    return Pingado.serve(suite.app).then(function(server){
	suite.server = server
	let addr = server.address();
	suite.logger.warn('Running '+addr.family+' server on '+addr.address+addr.port)
	return suite
    })
}

let onShutdown = function(suite){
    return Pingado.shutdown(suite).then(function(callback){
	suite.logger.warn('Rails app listening for killing events')
	process.on('SIGTERM', callback);
	process.on('SIGINT', callback);
	return suite
    })
}
 
let onError = function(e){
    console.log(e)
}

module.exports = function(env){
    return Pingado.init(env)
	.then(onInit)
	.then(onConfig)
	.then(onServe)
	.then(onShutdown)
        .catch(onError)
}
