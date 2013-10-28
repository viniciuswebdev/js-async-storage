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

	setTTL : function (key, value, time) {
		this.setItem(key, value);
		setTimeout(function() {
    		SimpleStorage.removeItem(key);
		}, time)
	},

	pushArray : function (key, value) {
		arr = this.getItem(key);
		console.log(arr);
		arr.push(value);
		this.setItem(key, arr);
	}

};