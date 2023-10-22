// RA2 2223 sem 1


// // Section B
// function something(xs, ys) {
//  function swap_pair(p, q) {
//  let head_p = head(p);
//  let tail_p = tail(p);
//  set_head(p, head(q));
//  set_tail(p, tail(q));
//  set_head(q, head_p);
//  set_tail(q, tail_p);
//  }
//  if (!is_null(xs)) {
//  swap_pair(xs, ys);
//  something(tail(xs), tail(ys));
//  }
// }
// let AA = list(list(11), list(22), list(33), list(44));
// let BB = list(list(55), list(66), list(77), list(88));
// let AA0 = AA;
// let AA0_head = head(AA0);
// let AA0_tail = tail(AA0);
// let AA1 = tail(AA);
// let AA1_head = head(AA1);
// let AA1_tail = tail(AA1);
// something(AA, BB);


// Section C
function what(rows) {
 let M = [];
 let rr = 0;
 while (rr < rows) {
 M[rr] = [];
 let cc = 0;
 while (cc <= rr ) {
 if ( cc % 2 === 0 ) {
 M[rr][cc] = () => 10 * rr + cc;
 } else {
 let temp = 10 * rr + cc;
 M[rr][cc] = () => temp;
 }
 cc = cc + 1;
 }
 rr = rr + 1;
 }
 return M;
}
let AA = what(7);