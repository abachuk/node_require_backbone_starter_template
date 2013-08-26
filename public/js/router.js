define(['jquery', 'underscore', 'backbone', 'views/HomeView'], function($, _, Backbone, HomeView){
	App.Router = Backbone.Router.extend({
		initialize: function(){
			console.log('initialize router');
			this.homeView = HomeView;
			Backbone.history.start();
		},
		routes: {
			'': 'home'
		},

		'home': function(){
			console.log(this);
			this.homeView.render();
		}
	});

	return App.Router;

});