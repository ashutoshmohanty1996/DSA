//0-1 knapsack problem

//@ recursive approach

var recursive = (w, p, n, c) => {
    if (n === 0 || c === 0) return 0;
    var include = 0;
    var exclude = 0;

    //when you include current item
    if (w[n - 1] <= c) {
        include = p[n - 1] + recursive(w, p, n - 1, c - w[n - 1]);
        //console.log(include);
    }
    //excluding the current item
    exclude = 0 + recursive(w, p, n - 1, c);
    //console.log(exclude);
    return Math.max(include, exclude);
}

var weights = [2, 2, 3, 1];
var prices = [5, 20, 20, 10];
var items = 4;
var capacity = 5;

console.log(recursive(weights, prices, items, capacity));






//using DP-----TopDown and memoization

var topDown = (w, p, n, c) => {
    if (n === 0 || c === 0) return 0;
    var include = [];
    var exclude = [];

    //when you include current item
    if (w[n - 1] <= c) {
        include[n-1] = p[n - 1] + recursive(w, p, n - 1, c - w[n - 1]);
        console.log(...include);
    }
    //excluding the current item
    exclude[n-1] = 0 + recursive(w, p, n - 1, c);
    console.log(...exclude);
    return Math.max(...include, ...exclude);
}

console.log(topDown(weights, prices, items, capacity));


