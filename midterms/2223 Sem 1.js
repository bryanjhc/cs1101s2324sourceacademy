// Midterms 2223 Sem 1

const recruit_info = list(list(150, true, 19),
 list(101, false, 21), list(122, false, 20));
// Three recruits: 1 Cadet and 2 Avengers, aged 19, 21 and 20 respectively


// Qn 3
function average_age(recruits) {
    function helper(recruits, numerator, denominator) {
        return is_null(recruits)
               ? numerator / denominator
               : helper(tail(recruits), numerator + head(tail(tail(head(recruits)))), denominator + 1);
    }
    return helper(recruits, 0, 0);
}

function average_age_accum(recruits) {
    return accumulate((x1, wish) => head(tail(tail(x1))) + wish, 0, recruits) / length(recruits);
}

// average_age_accum(recruit_info);


// Qn 4
function split_type(recruits) {
    return accumulate((x, y) => head(tail(x))
                                ? pair(pair(x, head(y)), tail(y))
                                : pair(head(y), pair(x, tail(y))),
                                pair(null, null),
                                recruits);
}

function split_type2(recruits) {
    return accumulate((x, y) => head(tail(x))
                                ? pair(append(list(x), head(y)), tail(y))
                                : pair(head(y), append(list(x), tail(y))),
                                pair(null, null),
                                recruits);
}
// display(split_type(recruit_info));


// Qn 5
// draw_data(list(list(pair(list(1), list(2)))));


// Qn 7
const xs = map(x => x % 2 === 0 ? x : list(x), enum_list(1, 999));
// display_list(xs);


// Qn 12
const v1 = list(1, 2, 3);
const v2 = list(1, 2, 3, 4);
function equal_vec(x, y) {
    return is_null(x) && is_null(y)
           ? true
           : is_null(x) || is_null(y)
           ? false
           : (head(x) === head(y)) && equal_vec(tail(x), tail(y));
}
// display(equal_vec(v1, v2)); // evaluates to false
// display(equal_vec(v1, v1)); // evaluates to true


// Qn 13
const v3 = list(1, 2, -3);
const v4 = list(2, 0, 3);
function dot_product(x, y) {
    return is_null(x) && is_null(y)
           ? 0
           : head(x) * head(y) + dot_product(tail(x), tail(y));
}
// dot_product(v3, v4); // evaluates to -7

// Qn 17
function insert(x, xs, cmp) {
    return is_null(xs)
    ? list(x)
    : cmp(x, head(xs))
    ? pair(x, xs)
    : pair(head(xs), insert(x, tail(xs), cmp));
}
function insert_sort(xs, cmp) {
    return accumulate(
    (x, ys) => insert(x, ys, cmp) ,
    null ,
    xs
    );
}


// Qn 19

function sort_pairs_by_sum(PL) {
    return insert_sort(PL, (x, y) => head(x) + tail(x) <= head(y) + tail(y));
}
const plist = list( pair(3,3), pair(1,2), pair(5,3), pair(0,5) );
sort_pairs_by_sum(plist); // returns list([1,2], [0,5], [3,3], [5,3])


// Qn 20
function sort_pairs(PL) {
 const S = insert_sort(PL, (x, y) => tail(x) >= tail(y));
 return insert_sort(S, (x, y) => head(x) <= head(y));
} 
const L = list(pair(3,4), pair(6,2), pair(3,2), pair(4,2), 
 pair(3,7), pair(6,5), pair(6,4));
sort_pairs(L); // returns list([3,7],[3,4],[3,2],[4,2],[6,5],[6,4],[6,2])


// Qn 21
function filter_by_pos(xs, pos_list) {
    function select(ys, curr_pos, ps) {
        return is_null(ps)
               ? null
               : curr_pos < head(ps)
               ? select(tail(ys), curr_pos + 1, ps)
               : pair(head(ys), select(tail(ys), curr_pos + 1, tail(ps)));
    }
    return select(xs, 0, pos_list);
}

const L2 = list(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
// display_list(filter_by_pos(L2, list(1, 4, 5, 8))); // returns list(11,14,15,18)
filter_by_pos(L2, list()); // returns null


// Qn 22
function diff(A, B) {
    if (is_null(A)) {
        return A;
    } else if (is_null(B)) {
        return A;
    } else if (head(A) === head(B)) {
        return diff(tail(A), tail(B));
    } else if (head(A) < head(B)) {
        return pair(head(A), diff(tail(A), B));
    } else {
        return diff(A, tail(B));
    }
}

diff(list(2,4,5,6,9,10), list(4,6,7,10,11)); // returns list(2,5,9)
