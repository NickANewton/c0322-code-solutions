function ExampleConstructor() {
}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof (ExampleConstructor.prototype));

var obj = new ExampleConstructor();
console.log('Obj:', obj);

var isInstance = obj instanceof ExampleConstructor;
console.log('value of isInstance:', isInstance);
