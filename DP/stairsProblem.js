//Count ways to reach the nth stair using step 1, 2 or 3

// //Algorithm:

// Create a recursive function (count(int n)) which takes only one parameter.
// Check the base cases. If the value of n is less than 0 then return 0, and if the value of n is equal to zero then return 1 as it is the starting stair.
// Call the function recursively with values n-1, n-2 and n-3 and sum up the values that are returned, i.e. sum = count(n-1) + count(n-2) + count(n-3)
// Return the value of the sum.

//recursive approach

var findSteps = (n) => {
    if (n < 0) return 0;
    else if (n === 0) return 1;
    else {
        return findSteps(n - 1) + findSteps(n - 2) + findSteps(n - 3);
        //if its anything other than 1,2 or 3 just replace those stpes in the above function in place of 1, 2 or 3
    }
}

console.log(findSteps(2));

//top down using memoization
var dp = [];

var findStepsTD = (n) => {
    if (n < 0) return 0;
    if (n === 0) {
        dp[0] = 1;
        return dp[0];
    }
    if (dp[n]) {
        return dp[n];
    }
    else {
        dp[n] = findStepsTD(n - 1) + findStepsTD(n - 2) + findStepsTD(n - 3);
        return dp[n];
        //if its anything other than 1,2 or 3 just replace those stpes in the above function in place of 1, 2 or 3
    }
}

console.log(findStepsTD(2)); 

//bottom up approach
var a = 1, b = 1, c = 2,steps;

var findStepsBU = (n) => {
    if (n < 0) return 0;
    if (n == 0 || n == 1) {
        steps = a = b = n;
        return steps;
    }
    else if (n == 2) {
        steps = c = 2;
        return steps;
    }
    else {
        for (var i = 3; i <= n; i++) {
            steps = a + b + c;
            a = b;
            b = c;
            c = steps;
        }
        return steps;
    }
}
console.log(findStepsBU(3)); 
