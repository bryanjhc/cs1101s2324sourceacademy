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


// Qn 4
function average_age_accum(recruits) {
    return accumulate((x1, wish) => head(tail(tail(x1))) + wish, 0, recruits) / length(recruits);
}
average_age_accum(recruit_info);

function split_type(recruits) {
    return accumulate((x, y) => head(tail(x))
                                ? pair(pair(x, head(y)), tail(y))
                                : pair(head(y), pair(x, tail(y))),
                                pair(null, null),
                                recruits);
}
display_list(split_type(recruit_info));


// Qn 5
draw_data(list(list(pair(list(1), list(2)))));


// Qn 7
const xs = map(x => x % 2 === 0 ? x : list(x), enum_list(1, 999));
display_list(xs);