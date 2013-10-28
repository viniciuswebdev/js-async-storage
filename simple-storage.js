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
	}

};

var Users = {
    list: [],
    listeners: {},
    add: function(name) {
        this.list.push({name: name});
        this.dispatch("user-added");
    },
    on: function(eventName, listener) {
        if(!this.listeners[eventName]) this.listeners[eventName] = [];
        this.listeners[eventName].push(listener);
    },
    dispatch: function(eventName) {
        if(this.listeners[eventName]) {
            for(var i=0; i<this.listeners[eventName].length; i++) {
                this.listeners[eventName][i](this);
            }
        }
    },
    numOfAddedUsers: function() {
        return this.list.length;
    }
}

Users.on("user-added", function() {
    console.log(Users.numOfAddedUsers());
});

console.log("a");
Users.add("Krasimir");
console.log("b");
Users.add("Tsonev");










