function CoolStorage () {

	this.storage = window.localStorage;

	this.setItem = function (key, value) {
		this.storage.setItem(key, value);
	};

	this.getItem = function (key) {
		return this.parseResult(this.storage.getItem(key));
	};

	this.parseResult = function(result){
		var result;
		if (result == 'true'){
			result = true;
		}
		if (result == 'false'){
			result = false;
		}
		return result
	};
};

storage = new CoolStorage;
storage.setItem('key', false);
console.log(typeof storage.getItem('key'));
