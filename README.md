# js-async-storage

A simple javascript library to manage localstorage with some asynchronous functions.

- The async functions are not concurrent.
- Works only in browsers with localStorage support, there is no fallbacks.

## API

Include de library:

```html
<script src="js-async-storage.js"></script>
```
Using:

```javascript
storage = asyncStorage;
```

Set and get a item:

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

Set a temporary value:

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

storage.pushArray('cars', 'Fusca');
```

With async methods, you can give an instruction and pass a function callback to be called after things done.

Get all items:

```javascript
storage.getAllAsync(function(result){
    console.log(result);
});

```

Set and get a single value:

```javascript
storage.setItemAsync('key', 'value', function(){
    storage.getItemAsync('key', function(result){
        console.log(result);
    });
});
```
