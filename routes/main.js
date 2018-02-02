const path = require('path');

const require_controller = function(name){
    return require(path.join(__dirname, '..', 'app/controllers', name));
}

module.exports = {
    'GET':{
	'/': require_controller('index').get,
	'/coverage': require_controller('coverage'),
	'/tests': require_controller('tests')
    },
    'POST':{
	'/': require_controller('index').post 
    }
}
