function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }

  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      // Function body
    }
    // Return the named function
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      // Function body
    };
  }