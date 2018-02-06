module.exports = function(res){
    return {
	title: res.__('PINGADO_-_WEB_APPLICATION_FRAMEWORK'),
	footer: 'cc-by-sa 4.0',
	list:[
	    {title:res.__('GETTING_STARTED'), name:'dashboard', icon: 'dashboard'},
	    {title:res.__('GUIDE_ASSUMPTIONS'), name:'assumptions', icon: 'chevron_right'},
	    {title:res.__('WHAT_IS_PINGADO_?'), name:'whois', icon: 'chevron_right'},
	    {title:res.__('CREATING_A_NEW_PINGADO_PROJECT'), name:'creating', icon: 'chevron_right'}
	] 
    }
}
