Vue.http.headers.common['csrf-token'] = $('meta[name="_csrf"]').attr('value') 
Vue.http.post('/', {
    templates:['dashboard', 'assumptions', 'whois', 'creating']
}).then(function(res){
    res.body.el = "#app"
    let app = new App(res.body)
    app.start()
})
