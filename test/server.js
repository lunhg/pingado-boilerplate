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
	it('should GET /', function(){
	    return request(agent, {
		method: 'GET',
		path: '/', 
		code: 200,
		headers:{
		    'Content-Type': /html/,
		    'set-cookie': /_csrf=[a-zA-Z0-9\-\_]+; Path=\//
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
		    templates:['dashboard']
		},
		json: function(json){
		    console.log(json)
		    json.should.have.property('template')
		    json.should.have.property('routes')
		    json.should.have.property('data')
		}
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

	
	
	run(); // this is exposed when running mocha with the --delay flag
    });
    
});

