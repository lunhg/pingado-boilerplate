const path = require('path');

const require_controller = function(name){
    return require(path.join(__dirname, '..', 'app/controllers', name));
}

module.exports = {
    'GET':{
	'/': require_controller('index').get
    }
}
