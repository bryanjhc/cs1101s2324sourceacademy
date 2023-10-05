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

//wishful thinking
function circwishful(xs) {
    if (is_null(xs)) {
        return xs;
    } else {
        if(is_null(tail(xs))) {
            return xs;
        } else {
            const wish = circwishful(pair(head(xs), tail(tail(xs))));
            return pair(head(tail(xs)), wish);
        }     
            
    }
}
// display_list(circwishful(list(1,2,3,4,5)));


// Qn 14
function circular_right_shift(xs) {
    if (is_null(xs)) {
        return xs;
    } else {
        const reversed = reverse(xs);
        const xn = head(reversed);
        const rest = tail(reversed);
        return pair(xn, reverse(rest));
    }
}
// circular_right_shift(list(3,4,5,6,7));


// Qn 15


// Qn 18
function max_tree(tree) {
    return is_null(tree)
           ? 0
           : is_number(head(tree))
           ? math_max(head(tree), max_tree(tail(tree)))
           : math_max(max_tree(head(tree)), max_tree(tail(tree)));
}
const tree1 = null;
const tree2 = list(1, list(2, list(3, 4), 5));
const tree3 = list(5, list(6, list(3, 2), 1));
max_tree(tree3);


// Qn 19
function accumulate_tree(f, op, initial, tree) {
    return accumulate((x, ys) => !is_list(x)
                                 ? op(f(x), ys)
                                 : op(accumulate_tree(f, op, initial, x), ys),
                      initial,
                      tree);
}


// Qn 20
function replace_elem(old_e, new_e, tree) {
    return accumulate_tree(elem => elem === old_e ? new_e : elem, 
                            pair, 
                            null, 
                            tree);
}
const tree5 = list(1, list(4, list(3, 2), 1));
// display_list(replace_elem(1, 5, tree5));


