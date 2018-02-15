module.exports = function(req, res){
    res.cookie('pingado-lang', req.params['lang'], {timeout:90000000, httpOnly:true})
    res.render('index', {
	title: res.__('PINGADO_-_WEB_APPLICATION_FRAMEWORK'),
	_csrf: req.csrfToken()
    })
}

