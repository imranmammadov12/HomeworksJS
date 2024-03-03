function printPrototypeChain(obj) {
  console.log(obj);
  if (Object.getPrototypeOf(obj) === null) {
    console.log(null);
    process.exit(); 
  }
  printPrototypeChain(Object.getPrototypeOf(obj));
}

const obj = {};
printPrototypeChain(obj);
