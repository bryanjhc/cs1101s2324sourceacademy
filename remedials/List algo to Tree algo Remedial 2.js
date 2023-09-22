// Remedial 2 Converting list algorithms to tree algorithms

function sum_tree(tree){
    return is_null(tree)
           ? 0
           : is_list(head(tree))
           ? sum_tree(head(tree)) + sum_tree(tail(tree))
           : head(tree) + sum_tree(tail(tree));
}
const tree1 = list( list(1,2, list(3)),4, list(5,6));
equal(sum_tree(tree1), 21); //-> true