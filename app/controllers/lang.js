const path = require('path');
const compile = require('pingado-pug-compiler') 
const uuid = require('uuid');
const foreach = require('foreach');

// POST /:lang to compile files 
// followin language definition in %ROOT/locale 
const onPost = function(req, res){
    // compile layout first
    let layout_path = path.join(__dirname, '../..', 'app/views/layout.vue');

    // Setup some vue 'one-page' routes to pass to Vue-Router
    let layout_options = require('./vue')(res);

    // After compile layout, compile all view components defined with extension .vue
    compile(layout_path, layout_options).then(function(layout){
	let vueApp = {template:layout, data:{type:'anonymous',name: uuid.v4()}, routes: []}
	
	// compile every requested (TODO and authorized view) 
	let promises = [];

	// setup json following template definitions
	foreach(req.body.templates, function(v,k,o){
	    let vue = compile(path.join(__dirname, '../..', 'app/views/'+v+'.vue'), {'__':res.__});
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

module.exports = onPost
