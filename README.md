#js-async-storage

A simple javascript library to manage localstorage with some asynchronous functions.

## API

```
storage = asyncStorage;
```

Setting and getting a item:

```
storage.setItem('key', 'value');
storage.getItem('key');
```

Getting all items:

```
storage.getAll();
```

Give the index and get the key name:

```
storage.key(0);
```

Setting a temporary value:

```
storage.setTTL('key', 'value', 100, function(){
    console.log('deleted');
});
```

Cleaning all keys and values:


```
storage.clear();
```

Add value to existing array:

```
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

```
storage.getAllAsync(function(result){
    console.log(result);
});

```

Setting and getting a single value:

```
storage.setItemAsync('key', 'value', function(){
    storage.getItemAsync('key', function(result){
        console.log(result);
    });
});
```
