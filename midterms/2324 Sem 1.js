// Midterms 2324 Sem 1


// Qn 13
function circular_left(lst) {
    return is_null(lst)
           ? null
           : accumulate(pair, list(head(lst)), tail(lst));
}
circular_left(list(1,2,3,4,5));

//shameless version
function circeasy(xs) {
    if (is_null(xs)) {
        return xs;
    } else {
        return reverse(pair(head(xs), reverse(tail(xs))));
    }
}
circeasy(list(1,2,3,4,5));