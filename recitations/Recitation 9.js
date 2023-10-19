// Recitation 9

// // Qn 1
// function make_search(A) {
//     return x => linear_search(A, x);
// }

// const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2];
// const my_search = make_search(my_array);
// my_search(14); // returns true
// // ... // many more calls to my_search
// my_search(30); // returns false

// function make_optimized_search(A) { // what if we sort then binary search?
//     const len = array_length(A);
//     const B = []; // store results in B so that A is not destructively sorted
    
//     for (let i = 0; i < len; i = i + 1) {
//         B[i] = A[i]; // copying over every entry of A into B
//     }
    
//     merge_sort(B); // O(nlogn)
//     return x => binary_search(A, x); // O(logn)
// } 
// /*
// time complexity is now O(nlogn). When we call make_optimized_search,
// we are only merge sorting O(nlogn) the list. But every time we call 
// my_search we are only doing binary_search O(logn)
// */


// Qn 2a
function fib(n) {
    const mem = [0, 1];
    for (let i = 2; i <= n; i = i + 1) {    // O(n) time complexity
        mem[i] = mem[i - 1] + mem[i - 2];
    }

    return mem[n];
}

display(fib(10));


// Qn 2b
function fib_new(n) {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i = i + 1){
        /*
        let temp = a + b;
        a = b;
        b = temp;
        */
        b = a + b;
        a = b - a; // to get the previous value of b
    }
    return b;
}
display(fib_new(10));


// Qn 3
