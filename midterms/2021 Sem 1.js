// Midterms 2021 Sem 1

// Qn 14
function transpose(M) {
    const nR = length(M); // number of rows of M
    const nC = length(head(M)); // number of columns of M
    // You may not need to use nR and/or nC.
    return map( x => accumulate((zs, wish) => pair(list_ref(zs, x), wish), null, M) , enum_list(0, nC - 1) ); //the enum list gives the rows of T
}

const A = list( list(1,2,3,4), list(5,6,7,8), list(9,10,11,12) );
display_list(transpose(A));
// returns list( list(1,5,9), list(2,6,10), list(3,7,11), list(4,8,12) )
