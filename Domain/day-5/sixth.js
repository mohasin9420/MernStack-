var factorial = (fact) =>
     {
    var original = 1;

    for (var i = fact; i > 1; i--) 
        {
        original = original * i    ;
    }

    console.log("Factorial of " + fact + " is: " + original);
}

factorial(0);