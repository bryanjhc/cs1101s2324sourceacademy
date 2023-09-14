// Recitation 5

// Qn 1
function flatten_list(xs) {
    return accumulate(append, null, xs);
}


const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
flatten_list(LoL);
// Returns list(1, 2, 3, 4, 5, 6, 7, 8, 9)


//Qn 2
function tree_sum(thetree) {
    return is_null(thetree)
          ? 0
          : is_number(head(thetree))
          ? head(thetree) + tree_sum(tail(thetree))
          : tree_sum(head(thetree)) + tree_sum(tail(thetree));
}

function tree_sum2(thetree) {
    return is_null(thetree)
          ? 0
          : (is_list(head(thetree))
          ? tree_sum2(head(thetree))
          : head(thetree))
          + tree_sum2(tail(thetree));
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum2(my_tree);
// Returns 28


// Qn 3
function tree_suma(tree) {
 return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}
function count_data_itemsa(tree) {
 return accumulate_tree(x => 1, (x, y) => x + y, 0 , tree);
}
// The following function flattens a given tree into a list:
function flattena(tree) {
 return accumulate_tree(x => list(x), append, null , tree);
}
// Write the function accumulate_tree by filling in the missing expression in the following 
function accumulate_tree(f, op, initial, tree) {
 return accumulate(
        (x , ys) => !is_list(x)
                    ? op(f(x), ys)
                    : op(accumulate_tree(f, op, initial, x), ys),
        initial, 
        tree);
}

tree_suma(my_tree);
count_data_itemsa(my_tree);
flattena(my_tree);