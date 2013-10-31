SimpleStorage = {

	storage : window.localStorage,

	setItem : function (key, value) {
		this.storage.setItem(key, JSON.stringify(value));
	},

	getItem : function (key) {
		return this.parse(this.storage.getItem(key));
	},

	parse : function (result) {
		return JSON.parse(result);
	},

	getAll : function () {		
		items = [];
		for (var i in this.storage){
			if (i.length){
				items.push({key:i, value:this.storage.getItem(i)});
			}
		}
		
		if(items.length > 0){ 
			return items;
		}
		return undefined;
	},

	removeItem : function (key) {
		this.storage.removeItem(key);
	},

	clear : function () {
		this.storage.clear();
	},

	key : function (key) {
		return this.storage.key(key);
	},

	setTTL : function (key, value, time, callback) {
		this.setItem(key, value);
		setTimeout(function() {
    		SimpleStorage.removeItem(key);
    		callback();
		}, time)
	},

	pushArray : function (key, value) {
		arr = this.getItem(key);
		arr.push(value);
		this.setItem(key, arr);
	},

	getAllAsync : function (callback){
		window.setTimeout(function() {
   			callback(SimpleStorage.getAll());
		}, 0);
	},

	setItemAsync : function (key, value, callback){
		window.setTimeout(function() {
   			callback(SimpleStorage.setItem(key, value));
		}, 0);
	},

	getItemAsync : function (key, callback){
		window.setTimeout(function() {
   			callback(SimpleStorage.getItem(key));
		}, 0);
	}
};
