function CoolStorage () {

	this.storage = window.localStorage;

	this.setItem = function (key, value) {
		this.storage.setItem(key, JSON.stringify(value));
	};

	this.getItem = function (key) {
		return JSON.parse(this.storage.getItem(key));
	};
};

storage = new CoolStorage;
storage.setItem('key', true);
console.log(typeof storage.getItem('key'));
