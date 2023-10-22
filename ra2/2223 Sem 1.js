function something(xs, ys) {
 function swap_pair(p, q) {
 let head_p = head(p);
 let tail_p = tail(p);
 set_head(p, head(q));
 set_tail(p, tail(q));
 set_head(q, head_p);
 set_tail(q, tail_p);
 }
 if (!is_null(xs)) {
 swap_pair(xs, ys);
 something(tail(xs), tail(ys));
 }
}
let AA = list(list(11), list(22), list(33), list(44));
let BB = list(list(55), list(66), list(77), list(88));
let AA0 = AA;
let AA0_head = head(AA0);
let AA0_tail = tail(AA0);
let AA1 = tail(AA);
let AA1_head = head(AA1);
let AA1_tail = tail(AA1);
something(AA, BB);