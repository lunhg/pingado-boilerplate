let foreach = function(o, callback){
    for(var e in o){
	callback(o[e], e, o)
    }
};

class App {
    constructor (opt){
	foreach(opt.routes, function(e,i,a){
	    e.props = true
	    e.component.props = []
	    foreach(opt.data, function(v,k,o){
		e.component.props.push(k)
	    })
	})
	
	this.vue = new Vue({  
	    router:  new VueRouter({
		history: true,
		linkActiveClass: 'active-class',
		routes: opt.routes
	    }),
	    created: function(){
		console.log("Vue app created");
		if(this.$router.currentRoute.path === '/'){
		    this.$router.push({path:'/dashboard'})
		}
	    },
	    template:opt.template,
	    data: function(){
		opt.data.drawer = true;
		return opt.data
	    }
	})
    }

    start(){
	this.vue.$mount('#app')
    }
}



