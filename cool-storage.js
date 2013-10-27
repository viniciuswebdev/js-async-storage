function CoolStorage () {

	this.storage = window.localStorage;

	this.setItem = function (key, value) {
		this.storage.setItem(key, value);
	};

	this.getItem = function (key) {
		return this.storage.getItem(key);
	};
}

storage = new CoolStorage;
storage.setItem('wkefpo', 'value');
console.log(storage.getItem('wkefpo'));