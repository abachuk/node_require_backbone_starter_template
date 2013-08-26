/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , items = require('./routes/items')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , dbPath = 'mongodb://localhost/mydatabase' //creates DB if it doesn't exist
  , MemoryStore = require('connect').session.MemoryStore;

var app = express();

// Create a session store to share between methods
app.sessionStore = new MemoryStore();

// Import the data layer
var mongoose = require('mongoose');



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.sessionSecret = 'my secret key';
app.use(express.limit('1mb'));
app.use(express.cookieParser());
app.use(express.session({
  secret: app.sessionSecret,
  key: 'express.sid',
  store: app.sessionStore
}));

// congigure mongoose
mongoose.connect(dbPath, function onMongooseError(err) {
  if (err) throw err;
});

// set some DB structure
var ItemsSchema = new mongoose.Schema({
	name: String,
  phone: String,
  address: String
});

var Items = mongoose.model('Items', ItemsSchema);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/items',function(req, res){
	//first param is query, if empty - ALL
  // just return plain JSON, so we can work with it in Backbone
	Items.find({}, function(err, docs){
		res.json('items', {items: docs});
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
