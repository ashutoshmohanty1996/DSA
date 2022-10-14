//to find the nth fibonacci number

//using recursion

var recursion = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  return recursion(n - 1) + recursion(n - 2);
};
console.log(recursion(5));

//using top down approach and memoization
var mem = [];

var topDown = (n) => {
  if (mem[n]) return mem[n];
  if (n === 0 || n === 1) mem[n] = n;
  else {
    mem[n] = topDown(n - 1) + topDown(n - 2);
  }
  return mem[n];
};

console.log(topDown(5));

//using bottom up approach

var a = 0,
  b = 1,
  c; // instead of using an array where the space complexity is O(n), we can use 3 variables, making the space complexity O(1)

var bottomUp = (n) => {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  for (var i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

console.log(bottomUp(5));

/*

5 => fib 4+ fib 3
4 => fib 3+ fib 2
3 => fib 2+fib 1



*/
