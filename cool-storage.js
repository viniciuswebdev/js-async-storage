function CoolStorage () {

	this.storage = window.localStorage;

	this.setItem = function (key, value) {
		this.storage.setItem(key, JSON.stringify(value));
	};

	this.getItem = function (key) {
		return this.parse(this.storage.getItem(key));
	};

	this.parse = function (result) {
		return JSON.parse(result);
	}

	this.getAll = function () {		
		items = [];
		for (var i in this.storage){
			if (i.length){
				items.push({key:i, value:this.storage.getItem(i)});
			}
		}
		
		return items;
	};
};

storage = new CoolStorage;
storage.setItem('opa', "2342.12");
console.log(storage.getAll());
