function myMath(operation, ...args) {
    if (Math.hasOwnProperty(operation) && typeof Math[operation] === 'function') {
      return Math[operation];
    }
  
    let result;
    switch (operation) {
      case 'add':
        result = args.reduce((acc, val) => acc + val, 0);
        break;
      case 'multiply':
        result = args.reduce((acc, val) => acc * val, 1);
        break;
      case 'divide':
        result = args.reduce((acc, val) => acc / val, 1);
        break;
      case 'subtract':
        result = args.reduce((acc, val) => acc - val, 0);
        break;
      default:
        console.error(`Error: Operation '${operation}' is not supported.`);
        return;
    }
  
    return result;
  }

  console.log(myMath('add', 1, 2, 3)); 
  console.log(myMath('multiply', 2, 3, 4)); 
  console.log(myMath('divide', 10, 2)); 
  console.log(myMath('subtract', 10, 2, 3)); 
  console.log(myMath('PI')); 
  console.log(myMath('bobar')); 
  