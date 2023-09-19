// Studio 6 in class

// Question 1
function remove_duplicates(lst) {
    return accumulate(
        (x, xs) =>
            is_null(member(x, xs)) /* if x is not a member of xs */
            ? pair(x, xs) /* then we pair x as the head of an already
                            built up non-duplicate list which is xs 
                            (right to left) */
            : xs, /* if not we return the already built, non-duplicate list */
        null,
        lst);
}
remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// Result: list(1, 2, 3, 4)
remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// Result: list("a", "x", "b", "c", "d")


// Question 2

function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        // do not use the first number anymore
        const combiA = subsets(tail(xs));
        // used the first number
        const combiB = map(c => pair(head(xs), c), combiA);
        return append(combiB, combiA); /* includes empty set, 
                                    because list(null) and always not 
                                    adding the "first" element */
    }
}

display_list(subsets(list(1, 2, 3)));
// Result: list(list(),
// list(1), list(2), list(3),
// list(1,2), list(1,3), list(2,3),
// list(1,2,3))


// Question 3

function permutations(s) {
    return is_null(s)
    ? list(null)
    : accumulate(append, null, /* the append will just append all
                                the fully permutated lists tgt */
        map(x => map(p => pair(x, p), 
        /* the map that takes in (x = first element) will
        add the first element x to the start of the already 
        permuated lists of the wish. Notice that this map will
        traverse the entire list of s so all the elements
        will have a chance of being the first element */
        
        /* the map that takes in (p = permeated lists) will add the 
        permutated lists to the end of the first element x as seen above
        likewise the traversing of the list as explained above */
                     permutations(remove(x, s))), /* this is your wish, 
                                                    permutations of the 
                                                    smaller list */
                     s));
}

display_list(permutations(list(1, 2, 3)));
// Result: list(list(1,2,3), list(1,3,2),
// list(2,1,3), list(2,3,1),
// list(3,1,2), list(3,2,1))