// Path Sorting

// Qn 9
// put the first n elements of xs into a list
function take(xs, n) {
    // YOUR SOLUTION HERE
    return n === 0
           ? null
           : pair(head(xs), take(tail(xs), n - 1));
}

// drop the first n elements from list, return rest
function drop(xs, n) {
    // YOUR SOLUTION HERE
    return n >= length(xs)
           ? null
           : pair(list_ref(xs, n), drop(xs, n + 1));
}


// Qn 10

function min(a, b) {
    return a < b ? a : b;
}

// given a non-empty list xs, returns the smallest item in xs
function smallest(xs) {
    // YOUR SOLUTION HERE
    return is_null(xs)
           ? null
           : is_null(tail(xs))
           ? head(xs)
           : min(head(xs), smallest(tail(xs)));
}


// Qn 11
// removes the first instance of x from xs
function remove(x, xs) {
    // YOUR SOLUTION HERE
    return is_null(xs)
           ? xs
           : head(xs) === x
           ? tail(xs)
           : pair(head(xs), remove(x, tail(xs)));
}


// Qn 12
function selection_sort(xs) {
    if (is_null(xs)) {
        return null;
    } else {
        // We pick the smallest element, where should it go?
        // What should we recurse on?
        // YOUR SOLUTION HERE
        const smallz = smallest(xs);
        const removez = remove(smallz, xs);
        return pair(smallz, selection_sort(removez));
    }
}

selection_sort(list(3,2,7,1,3));