define(['backbone', 'router'], function(Backbone, router){
	
	var init = function(){
		console.log('Starting the application');
		this.router = new App.Router();
	};

	return {
		init: init
	}

});

