// Midterms 2122 Sem 1

// Qn 1
function repeat(v, k) {
    return k === 0
           ? null
           : pair(v, repeat(v, k - 1));
}
function repeat_map(v, k) {
    return map(x => v, enum_list(1, k));
}
// repeat_map(10, 5); // returns list(10, 10, 10, 10, 10)
// repeat_map(10, 0); // returns null
// repeat("abc", 3); // returns list("abc", "abc", "abc")


// Qn 2
function expand_list(L, k) {
return accumulate((x1, wish) => append(repeat(x1, k), wish), null, L);
}
// expand_list(list(7, 8), 3); // returns list(7,7,7, 8,8,8)
// expand_list(list(7, 8), 0); // returns null
// expand_list(null, 3); // returns null


// Qn 3
function expand_matrix_mine(M, k) {
    return accumulate((x1, wish) => append(repeat(expand_list(x1, k), k), wish), null, M);
}
function expand_matrix_ans(M, k) {
    return expand_list(map(x => expand_list(x, k), M), k);
}
// display_list(expand_matrix_ans(list( list(1, 2, 3), list(4, 5, 6) ), 3));
// returns
// list( list(1, 1, 1, 2, 2, 2, 3, 3, 3),
// list(1, 1, 1, 2, 2, 2, 3, 3, 3),
// list(1, 1, 1, 2, 2, 2, 3, 3, 3),
// list(4, 4, 4, 5, 5, 5, 6, 6, 6),
// list(4, 4, 4, 5, 5, 5, 6, 6, 6),
// list(4, 4, 4, 5, 5, 5, 6, 6, 6) )


// Qn 9
function unique(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        return head(xs) === head(tail(xs))
       ? unique(tail(xs))
       : pair(head(xs), unique(tail(xs)));
    }
}
// unique( list(1, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6, 6) );
// returns list(1, 2, 3, 4, 5, 6)


// Qn 10
function unique_iter(xs) {
    function iter(ys, result) {
        if (is_null(ys)) {
            return result;
        } else {
            return iter(tail(ys), is_null(result) || head(ys) !== head(result)
                                  ? pair(head(ys), result)
                                  : result);
        }
    }
        return iter(reverse(xs), null);
}
unique_iter( list(1, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6, 6) );


// Qn 17
const my_ston = list( list(1, 2, list(3, 4),5), 6, list(7), 8, 9,
 list( list(10), 11, list(12, 13, list(14, 15)) ) );
function smallest(ston) {
    return is_pair(head(ston)) 
           ? smallest(head(ston))
           : head(ston);
}
smallest(my_ston); // returns 1


// Qn 18
function largest(ston) {
    return !is_null(tail(ston))
           ? largest(tail(ston))
           : is_number(head(ston))
           ? head(ston)
           : largest(head(ston));
}
largest(my_ston); // returns 15


// Qn 19
function find(ston, x) {
    if (is_null(ston)) {
        return false;
    } else if (is_null(tail(ston))) {
        return is_pair(head(ston)) ? find(head(ston), x) : x === head(ston);
    } else {
        return x >= smallest(tail(ston))
               ? find(tail(ston), x)
               : is_pair(head(ston)) ? find(head(ston), x) : x === head(ston);
    }
}
find(my_ston, 12); // returns true
find(my_ston, 3.5); // returns false