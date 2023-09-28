"use strict";
function mux(input) {
    let out = !(!(!input.a && input.b) && !(input.a && input.c));
    print(out);
}
function print(s) {
    console.log(s);
}
const truthtable3 = [
    { a: 0, b: 0, c: 0 },
    { a: 0, b: 0, c: 1 },
    { a: 0, b: 1, c: 0 },
    { a: 0, b: 1, c: 1 },
    { a: 1, b: 0, c: 0 },
    { a: 1, b: 0, c: 1 },
    { a: 1, b: 1, c: 0 },
    { a: 1, b: 1, c: 1 },
];
truthtable3.forEach((e) => {
    print(e);
    print("-------mux-------");
    mux(e);
    print("###############");
});
