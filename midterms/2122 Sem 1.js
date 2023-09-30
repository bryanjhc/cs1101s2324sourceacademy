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
display_list(expand_matrix_ans(list( list(1, 2, 3),
 list(4, 5, 6) ), 3));
// returns
// list( list(1, 1, 1, 2, 2, 2, 3, 3, 3),
// list(1, 1, 1, 2, 2, 2, 3, 3, 3),
// list(1, 1, 1, 2, 2, 2, 3, 3, 3),
// list(4, 4, 4, 5, 5, 5, 6, 6, 6),
// list(4, 4, 4, 5, 5, 5, 6, 6, 6),
// list(4, 4, 4, 5, 5, 5, 6, 6, 6) )


// Qn 4