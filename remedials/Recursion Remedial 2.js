// Remedial 2

// Fractal revision
import { rcross, make_cross, stack, beside, show } from "rune";

function fractal(rune, n) {
    return n <= 1
           ? rune
           : beside(rune, fractal(stack(rune, rune), n - 1));
}

// show(fractal(make_cross(rcross), 5));



// Qn 1
function enum_list(a, b) {
    return a > b // predicate and consequent given by grandmaster
           ? null
           : pair(a, enum_list(a + 1, b));
}

function enum_list_reversible(a, b) {
    return a < b
           ? enum_list(a, b)
           : reverse(enum_list(b, a));
}

// display_list(enum_list(-1, 5));
// display_list(enum_list(5, -1));
// display_list(enum_list_reversible(5, -1));
// enum_list(-1,5) -> list(-1,0,1,2,3,4,5)



// Qn 2
function append(a, b) {
    return is_null(b)
           ? a
           : is_null(a)
           ? b
           : pair(head(a), append(tail(a), b));
}

// display_list(append(list(1, "a", 2, "c"), list(5, "h", 9)));
// display_list(append(list(5, 3, 2, 4), null));
// display_list(append(null, list(7, 3, 2, 5)));



// Qn 3
function range(a, b, d) { 
    return a > b
           ? null
           : pair(a, range(a + d, b, d));
}

// display_list(range(1, 10, 2));
//range(1,10,2) -> list(1,3,5,7,9)



// Qn 4
function reverse(ls) {
    return is_null(ls)
           ? null
           : append(reverse(tail(ls)), list(head(ls)));
}
// display_list(reverse(list(1, 2, 3, 4)));
//reverse(list(1,2,3,4)) -> list(4,3,2,1)



// Qn 5
function merge(xs, ys) { //merge two sorted lists into a sorted list
    return is_null(xs)
           ? ys
           : is_null(ys)
           ? xs
           : head(xs) < head(ys)
           ? pair(head(xs), merge(tail(xs), ys))
           : pair(head(ys), merge(xs, tail(ys)));
}
// display_list(merge(list(1,3,5), list(2,4,6)));
//merge(list(1,3,5), list(2,4,6)) -> list(1,2,3,4,5,6)



// Qn 6
function zip(xs, ys) { //zip into a list of pairs
    return is_null(xs) && is_null(ys)
           ? null
           : pair(pair(head(xs), head(ys)), zip(tail(xs), tail(ys)));
}
// display_list(zip(list(1,2,3), list(4,5,6)));
//zip(list(1,2,3), list(4,5,6)) -> list(pair(1,4), pair(2,5), pair(3,6))



// Qn 7
function insert(x, xs) { //insert x into sorted list xs
    return is_null(xs) // either means empty list or x is the largest element
           ? list(x)
           : x <= head(xs) // x is the smaller than the head of list
           ? pair(x, xs) // put x at the start of the list
           : pair(head(xs), insert(x, tail(xs)));
}
// display_list(insert(10, list(1,3,6,8)));
// insert(4, list(1,3,6,8)) -> list(1,3,4,6,8)



// Qn 8
function insertion_sort(lst) {
    return is_null(lst)
           ? null
           : insert(head(lst), insertion_sort(tail(lst)));
}
display_list(insertion_sort(list(4,8,2,1)));
// insertion_sort(list(4,8,2,1)) -> list(1,2,4,8)