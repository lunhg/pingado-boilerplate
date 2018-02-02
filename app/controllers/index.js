const path = require('path');
const compile = require('../../templates/compiler') 
const uuid = require('uuid');
const foreach = require('foreach');

// Simple GET / with csrf token protection
// GET / will compile layout.pug ove index.pug, that will have Vue.js subrouters configured via POST / 
const onGet = function(req, res){
    res.render('index', {
	title: 'Cafe rails example',
	_csrf: req.csrfToken()
    });
};

const onPost = function(req, res){
    // compile layout first
    compile(path.join(__dirname, '../..', 'app/views/layout.vue')).then(function(layout){
	let vueApp = {template:layout, data:{type:'anonymous',name: uuid.v4()}, routes: []}
	
	// compile every requested (TODO and authorized view) 
	let promises = [];
	foreach(req.body.templates, function(v,k,o){
	    let vue = compile(path.join(__dirname, '../..', 'app/views/'+v+'.vue'));
	    vueApp.routes.push({path:'/'+v, name:v, component:{template:null}})
	    promises.push(vue);
	});

	// Catch some error
	let onError = function(err){
	    res.render('error', {msg:err.message, code:err.code, stack:err.stack.split("\n")})
	}
	
	// This will return vue as json app 
	let onSuccess = function(results){
	    foreach(results, function(e,i,a){
		vueApp.routes[i].component.template = e
	    });

	    res.json(vueApp);
	};

	Promise.all(promises).then(onSuccess).catch(onError);
    })
}


exports.post = onPost

exports.get = onGet
