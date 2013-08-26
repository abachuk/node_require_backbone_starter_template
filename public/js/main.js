require.config({
    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: 'vendor/jquery',
        backbone: 'vendor/backbone',
        underscore: 'vendor/underscore',
        text: 'vendor/text',
        templates: '../templates',
        app: 'App'
    }
});

// Kicking off the app 
App = {};
require(['app'], function (app) {
    app.init();
});