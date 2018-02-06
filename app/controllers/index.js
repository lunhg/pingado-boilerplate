
// Simple GET / with csrf token protection
// GET / will compile layout.pug ove index.pug, that will have Vue.js subrouters configured via POST / 
const onGet = function(req, res){
    res.cookie('pingado-locale', req.query['lang'] || 'en', { maxAge: 900000, httpOnly: true });
    res.render('index', {
	title: res.__('PINGADO_-_WEB_APPLICATION_FRAMEWORK'),
	_csrf: req.csrfToken()
    });
};


module.exports = onGet
