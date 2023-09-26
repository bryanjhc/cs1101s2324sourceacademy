// Mission 11 Sorting Things Out

// Task 1

function partition(xs, p) {
    // your answer here
    return accumulate((x1, wish) => x1 <= p 
                                    ? pair(pair(x1, head(wish)), tail(wish)) 
                                    : pair(head(wish), pair(x1 , tail(wish))), 
                                    pair(null, null), xs);
}

// Test
// const my_list = list(1, 2, 3, 4, 5, 6);
// partition(my_list, 4);


// Task 2

function partition(xs, p) {
    // your answer here
    return accumulate((x1, wish) => x1 <= p 
                                    ? pair(pair(x1, head(wish)), tail(wish)) 
                                    : pair(head(wish), pair(x1 , tail(wish))), 
                                    pair(null, null), xs);
}

function quicksort(xs) {
    // your answer here
    if (is_null(xs)) {
        return xs;
    } else if (is_null(tail(xs))) {
        return list(head(xs));
    } else {
        const part = partition(tail(xs), head(xs));
        return append(quicksort(head(part)), append(list(head(xs)), quicksort(tail(part))));
    }
}
// Test
// const my_list = list(23, 12, 56, 92, -2, 0);
// quicksort(my_list);


// Qn 3

// What is the order of growth in time for applying partition to a list of length n?
// Theta(n)


// Qn 4

// What is the order of growth in time for applying quicksort to an already sorted list of length n?
// Theta(n^2)


// Qn 5

// Let f(n) be the fastest running time of quicksort for any list with length n. What is the order of growth of the function f(n), using Θ notation?
// Theta(n log n)