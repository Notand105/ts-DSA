type bits = {
    a:boolean | number,
    b:boolean | number
}

function and(input : bits):void{
    let out : boolean | number = input.a && input.b
    console.log(out)
}
function or(input : bits):void{
    let out : boolean | number = input.a || input.b
    console.log(out)
}
function nand(input : bits):void{
    let out : boolean | number = !(input.a && input.b )
    console.log(out)
}
function xor(input : bits):void{
    let out : boolean | number = (!input.a && input.b) || (input.a && !input.b)
    console.log(out)
}
function nor(input : bits):void{
    let out : boolean | number = (!input.a && !input.b)
    console.log(out)
}
function print(s:string | number | boolean | bits):void{
    console.log(s)
}

const truthtable : bits[] = [{a:0,b:0},{a:0,b:1},{a:1,b:0},{a:1,b:1}]

truthtable.forEach((e)=>{
    print(e)
    print("-------and-------")
    and(e)
    print("-------or-------")
    or(e)
    print("--------nand------")
    nand(e)
    print("-------xor-------")
    xor(e)
    print("-------nor-------")
    nor(e)
    print("###############")
})
