function average(...args)
{
    console.log(args);

    var avg=args.reduce(function(a,b)
    {return a+b;})
    /args.length;
    console.log(avg);
}
console.log("Average:", average(1,2,3,4,5));