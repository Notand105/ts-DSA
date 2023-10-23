"use strict";
function and(input) {
    let out = input.a && input.b;
    console.log(out);
}
function or(input) {
    let out = input.a || input.b;
    console.log(out);
}
function nand(input) {
    let out = !(input.a && input.b);
    console.log(out);
}
function xor(input) {
    let out = (!input.a && input.b) || (input.a && !input.b);
    console.log(out);
}
function nor(input) {
    let out = (!input.a && !input.b);
    console.log(out);
}
function print(s) {
    console.log(s);
}
const truthtable = [{ a: 0, b: 0 }, { a: 0, b: 1 }, { a: 1, b: 0 }, { a: 1, b: 1 }];
truthtable.forEach((e) => {
    print(e);
    print("-------and-------");
    and(e);
    print("-------or-------");
    or(e);
    print("--------nand------");
    nand(e);
    print("-------xor-------");
    xor(e);
    print("-------nor-------");
    nor(e);
    print("###############");
});
