Express.js / Require.js / Backbone.js boilerplate
======================================

work in progress, this boilerplate uses text plugin, require and backbone. 
Mongoose module connects (or creates mongodb).

to import json file to mongo use mongoimport -d mydbname -c items --type json /Users/username/Downloads/items.json --jsonArray
if you work with static data (json file) load json file to your public directory and point collection or model to localhost:3000/items.json

