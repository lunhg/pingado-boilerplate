const should = require('should');
const supertest = require('supertest');
const path = require('path');
const server = require('../index.js')
const request = require('./mocha/request');

server(path.join(__dirname, '..', '.env')).then(function(suite){    
    
    let testname = 'test/'+path.basename(__filename)
    let token = ''
    let cookie = ''

    describe(testname, function(){
	
	let agent = supertest.agent("http://localhost:3000")
	it('should GET /?lang=en', function(){
	    return request(agent, {
		method: 'GET',
		path: '/',
		query:{
		    lang:'en'
		},
		code: 200,
		headers:{
		    'Content-Type': /html/
		},
		html:function(document){
		    let csrf = document.querySelector("meta").getAttribute('name')
		    csrf.should.equal('_csrf');
		    let csrfToken = document.querySelector("meta").getAttribute('value')
		    csrfToken.should.match(/[a-zA-Z0-9\-\_]+/);
		    token = csrfToken
		}
	    }).then(function(res){
		cookie = res.headers['set-cookie']
	    })
	})


	it('should POST /', function(){
	    return request(agent, {
		method: 'POST',
		path: '/',
		code: 200,
		set:{
		    'cookie': cookie
		},
		send:{
		    _csrf: token,
		    templates:['dashboard', 'assumptions', 'whois', 'creating']
		},
		json: function(json){
		    json.should.have.property('template')
		    json.should.have.property('routes')
		    json.should.have.property('data')
		}
	    })
	})

	it('should GET /?lang=pt-br', function(){
	    return request(agent, {
		method: 'GET',
		path: '/?lang=pt-br', 
		code: 200,
		headers:{
		    'Content-Type': /html/
		},
		html:function(document){
		    let csrf = document.querySelector("meta").getAttribute('name')
		    csrf.should.equal('_csrf');
		    let csrfToken = document.querySelector("meta").getAttribute('value')
		    csrfToken.should.match(/[a-zA-Z0-9\-\_]+/);
		    token = csrfToken
		}
	    }).then(function(res){
		cookie = res.headers['set-cookie']
	    })
	})

	it('should GET /coverage', function(){
	    return request(agent, {
		method: 'GET',
		path: '/coverage', 
		code: 302,
		headers:{
		    'Content-Type': /text/,
		    'location':'/assets/index.html'
		}
	    })
	});

	it('should GET /assets/index.html', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/index.html',
		code:200,
		headers:{
		    'Content-Type':/html/
		}
	    })
	})

	it('should GET /tests', function(){
	    return request(agent, {
		method: 'GET',
		path: '/tests', 
		code: 302,
		headers:{
		    'Content-Type': /text/,
		    'location':'/assets/mochawesome.html'
		}
	    })
	});

	it('should GET /assets/mochawesome.html', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/index.html',
		code:200,
		headers:{
		    'Content-Type':/html/
		}
	    })
	})

	it('should GET /assets/pingado.jpg', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/images/pingado.jpg',
		code:200,
		headers:{
		    'Content-Type':/image/
		}
	    })
	})

	it('should GET /assets/vuetify.min.css', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/vuetify.min.css',
		code:200,
		headers:{
		    'Content-Type':/css/
		}
	    })
	})


	it('should GET /assets/roboto.css', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/roboto.css',
		code:200,
		headers:{
		    'Content-Type':/css/
		}
	    })
	})

	it('should GET /assets/index.css', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/index.css',
		code:200,
		headers:{
		    'Content-Type':/css/
		}
	    })
	})

	it('should GET /assets/vue.js', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/vue.js',
		code:200,
		headers:{
		    'Content-Type':/javascript/
		}
	    })
	})

	it('should GET /assets/vue-resource.js', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/vue-resource.min.js',
		code:200,
		headers:{
		    'Content-Type':/javascript/
		}
	    })
	})

	it('should GET /assets/vue-router.js', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/vue-router.js',
		code:200,
		headers:{
		    'Content-Type':/javascript/
		}
	    })
	})

	it('should GET /assets/vuetify.js', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/vuetify.js',
		code:200,
		headers:{
		    'Content-Type':/javascript/
		}
	    })
	})

	it('should GET /assets/index.js', function(){
	    return request(agent, {
		method: 'GET',
		path: '/assets/js/index.js',
		code:200,
		headers:{
		    'Content-Type':/javascript/
		}
	    })
	})

	
	
	run(); // this is exposed when running mocha with the --delay flag
    });
    
});

