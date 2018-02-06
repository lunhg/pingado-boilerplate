const foreach = require('foreach');
const JSDOM = require("jsdom").JSDOM;

module.exports = function(agent, expects){
    return new Promise(function(resolve, reject){
	let method = expects.method.toLowerCase()
	let req = agent[method](expects.path)
	
	if(expects.set){
	    foreach(expects.set, function(v,k,o){
		req = req.set(k,v)
	    })
	}

	if(expects.query){
	    foreach(expects.query, function(v,k,o){
		o = {}
		o[k] = v
		req = req.query(o)
	    });
	}

	if(expects.send) req = req.send(expects.send)

	if(expects.code) req = req.expect(expects.code)

	if(expects.headers){
	    foreach(expects.headers, function(v,k,o){
		req = req.expect(k,v)
	    })
	}
	if(expects.html){
	    req = req.expect(function(res){
		let dom = new JSDOM(res.text)
		expects.html(dom.window.document)
		return res
	    })
	}
	if(expects.json){
	    req = req.expect(function(res){
		try{
		    json = JSON.parse(res.text)
		    expects.json(json)
		}
		catch(e){
		    console.log(res.text)
		    reject(e)
		}
	    })
	}
	return req.then(resolve).catch(reject)
    })
}
