// Midterms 1718 Sem 1

// Qn 6
function solvable(xs, n) {
    const end = length(xs);
    function helper(n, pos) {
        return pos <= 0 || pos > end
               ? false
               : pos === end
               ? true
               : n === 0 
               ? false
               : helper(n - 1, pos - list_ref(xs, pos - 1)) // towards left
                 || 
                 helper(n - 1, pos + list_ref(xs, pos - 1)); // towards right
    }
    return helper(n, 1);
}

// display(solvable(list(3, 5, 8, 4, 2, 7, 1, 6), 3)); // should return true
// display(solvable(list(6, 1, 3, 5, 2, 2, 4, 3), 3)); // should return false.


// Qn 7
(( f => f(f )) // the essence of recursion
    (make_factorial =>
        n => (n === 0) ? 1 : n * (make_factorial 
            )(n - 1)
    )
)(5);