// Studio 10

// Qn 2
function bubblesort_array(A) {
    const len = array_length(A);
    for (let i = len - 1; i >= 1; i = i - 1) {
        for (let j = 0; j < i; j = j + 1) {
            if (A[j] > A[j + 1]) {
                const temp = A[j];
                A[j] = A[j + 1]; // mainly change these two lines
                A[j + 1] = temp; // to apply this to a list instead
            }
        }
    }
}

function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let p = L; // pointer
        for (let j = 0; j < i; j = j + 1) {
            if (head(p) > head(tail(p))) {
                const temp = head(p);
                set_head(p, head(tail(p))); // mainly change these two lines
                set_head(tail(p), temp); // to apply this to a list instead
            }
            p = tail(p); // move the pointer to the next element in L
        }
    }
}
const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]


// Qn 3 memoization (incomplete)
function cc(amount, kinds_of_coins) {
    return amount === 0
    ? 1
    : amount < 0 || kinds_of_coins === 0
    ? 0
    : cc(amount, kinds_of_coins - 1)
    +
    cc(amount - first_denomination(kinds_of_coins),
    kinds_of_coins);
}
function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 5 :
    kinds_of_coins === 2 ? 10 :
    kinds_of_coins === 3 ? 20 :
    kinds_of_coins === 4 ? 50 :
    kinds_of_coins === 5 ? 100 : 0;
}
let A = []
function write_in_mem(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}
function read_in_mem(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}
function cc_memoize(amount, kinds_of_coins) {
    if (amount >= && kinds_of_coins >= 0 && read_in_mem(amount, kinds_of_coins) !== undefined)
    return amount === 0
    ? 1
    : amount < 0 || kinds_of_coins === 0
    ? 0
    : cc(amount, kinds_of_coins - 1)
    +
    cc(amount - first_denomination(kinds_of_coins),
    kinds_of_coins);
}