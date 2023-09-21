// Recitation 6

// Qn 1
function insert_cmp(x, xs, cmp) {
    return is_null(xs)
    ? list(x)
    : cmp(x, head(xs))
    ? pair(x, xs)
    : pair(head(xs), insert_cmp(x, tail(xs), cmp));
}

function insertion_sort_cmp(xs, cmp) {
    return is_null(xs)
    ? xs
    : insert_cmp(head(xs),
    insertion_sort_cmp(tail(xs), cmp),
    cmp);
}

const xs = list(6, 3, 8, 5, 1, 9, 6, 4, 2, 7);

/* Stable vs UNstable sort: in stable sort, identical 
items will be in the same order, whereas in unstable sort, 
the identical items will be switched in order */

insertion_sort_cmp(xs, (x, y) => x < y);
// unstable sort, if want stable, use <= (less than or equal)
// Result: list(1, 2, 3, 4, 5, 6, 6, 7, 8, 9)

insertion_sort_cmp(xs, (x, y) => x > y);
// Result: list(9, 8, 7, 6, 6, 5, 4, 3, 2, 1)

insertion_sort_cmp(xs, (x, y) => false); 
// (worst case where every single item is reversed)
// Result: list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6)

const is_even = x => x % 2 === 0;

insertion_sort_cmp(xs, (x, y) => (is_even(x) && is_even(y)) 
                                  ? x < y 
                                  : is_even(x)
                                  ? true
                                  : is_even(y)
                                  ? false
                                  : x > y);
                                  
// by grandmaster joel                                  
insertion_sort_cmp(xs, (x, y) => !is_even(x + y) /* since negation, returns 
                                                    true if one of the numbers
                                                    is odd and one is even */
                                  ? is_even(x) /* true if x even, 
                                                  false if x odd */
                                  : is_even(x) /* check if one is even means
                                                  both is even since x + y
                                                  is even */
                                  ? x < y /* both even */
                                  : x > y); /* both odd */
// Result: list(2, 4, 6, 6, 8, 9, 7, 5, 3, 1)



// Qn 2
// half, rounded downwards
function middle(n) {
    return math_floor(n / 2);
}
// put the first n elements of xs into a list
function take(xs, n) {
    return is_null(xs)
           ? null
           : pair(head(xs), take(tail(xs), n - 1));
}
// drop the first n elements from the list and return the rest
function drop(xs, n) {
    return n >= length(xs)
           ? null
           : pair(list_ref(xs, n + 1), drop(xs, n + 1));
}
// merge two sorted lists into one sorted list
function merge(xs, ys) {
    if (is_null(xs)) { 
    return ys;
    } else if (is_null(ys)) { 
    return xs;
    } else {
    const x = head(xs);
    const y = head(ys);
    return x < y
    ? pair(x, merge(tail(xs), ys))
    : pair(y, merge(xs, tail(ys)));
    }
}
function merge_sort(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
    return xs;
    } else {
    const mid = middle(length(xs)); 
    return merge(merge_sort(take(xs, mid)), 
    merge_sort(drop(xs, mid)));
    }
}
