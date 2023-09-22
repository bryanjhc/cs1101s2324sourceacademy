// Remedial 2 Higher Order Functions

// Qn 1
function map(f, xs) { // applies function f to every element in the list
    return is_null(xs)
           ? null
           : pair(f(head(xs)), map(f, tail(xs)));
}

const map_using_accumulate = (f, xs) => 
                            accumulate((x, y) => pair(f(x), y), null, xs);

// display_list(map(x => x + 3, list(2, 4, 6)));
// display_list(map_using_accumulate(x => x + 3, list(2, 4, 6)));

// Qn 2
const append = (xs, ys) => accumulate(pair, ys, xs);



// Qn 3
const filter_using_accumulate = (pred, xs) => accumulate((h, t) => pred(h) ? pair(h, t): t, null, xs);
display_list(filter_using_accumulate(x => x % 2 !== 0, list(1, 2, 3, 4, 5)));


// Qn 4
function flatten_once_HOF(xs) {
    return accumulate((x, y) => append(x, y), null, xs);   
}
// display_list(flatten_once_HOF(list(list(2,5,3,6),
//                                       list(2,6,3,4),
//                                       list(1,8,5,6))));

function flatten_once_wo_HOF(xs) {
    return is_null(xs)
           ? null
           : append(head(xs), flatten_once_wo_HOF(tail(xs)));
}
// display_list(flatten_once_wo_HOF(list(list(2,5,3,6),
//                                       list(2,6,3,4),
//                                       list(1,8,5,6))));

//flatten_once(list(list(list(0)), list(1,2,3), list(4,5,6)))
// -> list(list(0),1,2,3,4,5,6)

// function flatten_all_the_way(xs) {
    
// }

display_list(flatten_once_HOF(list(list(list(0)), list(1,2,3), list(4,5,6))));
