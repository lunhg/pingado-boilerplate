const path = require('path');
const foreach = require('foreach')

const require_controller = function(filepath){
    return require(path.join(__dirname, '..', 'app', 'controllers', filepath))
}

const config = require(path.join(__dirname, 'routes.json'))

let newscope = new Object()

foreach(config, function(v,k,o){
    newscope[k] = {}
    foreach(v, function(_v, _k, _o){
	newscope[k][_k] = require_controller(_v)
    })
})

module.exports = newscope
