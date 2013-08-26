define(['backbone', 'text!templates/home.html'], function(Backbone, homeTempalte){


	App.startHome = Backbone.View.extend({
		el: '#content',

		render: function(){
			console.log('sss');
			this.$el.html(homeTempalte);
		},

		events: {

		}
	});

	return new App.startHome();

});