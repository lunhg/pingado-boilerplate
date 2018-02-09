module.exports = function(req, res){
    res.cookie('pingado-lang', 'en', {timeout:90000000, httpOnly:true})
    res.render('index', {
	title: res.__('PINGADO_-_WEB_APPLICATION_FRAMEWORK'),
	_csrf: res.csrfToken()
    })
}
