#js-async-storage

A simple javascript library to manage localstorage with some asynchronous functions.

## API

```javascript
storage = asyncStorage;
```

Setting and getting a item:

```javascript
storage.setItem('key', 'value');
storage.getItem('key');
```

Getting all items:

```javascript
storage.getAll();
```

Give the index and get the key name:

```javascript
storage.key(0);
```

Setting a temporary value:

```javascript
storage.setTTL('key', 'value', 100, function(){
    console.log('deleted');
});
```

Cleaning all keys and values:


```javascript
storage.clear();
```

Add value to existing array:

```javascript
var cars = new Array();
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
storage.setItem('cars', cars);

var moreCars = new Array();
moreCars[0] = "Saab";
storage.pushArray('cars', moreCars);
```

With async methods, you can give an instruction and pass a function callback to be called after things done.

Getting all items:

```javascript
storage.getAllAsync(function(result){
    console.log(result);
});

```

Setting and getting a single value:

```javascript
storage.setItemAsync('key', 'value', function(){
    storage.getItemAsync('key', function(result){
        console.log(result);
    });
});
```
