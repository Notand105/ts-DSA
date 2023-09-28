import { LinkedList, ListNode } from "../Linked List/LinkedList";

class Stack{
    public stack: LinkedList 
    constructor(head : number){
        let node: ListNode = new ListNode(head)
        this.stack = new LinkedList(node)
    }
    public push(data:number):void {
        this.stack.append(data)
    }
    public pop():void{
        if (this.stack.lenght() == 0){
            return
        }
        else if (this.stack.lenght() == 1){
            this.stack.head = null
            return
        }
        let head : ListNode | null = this.stack.head
        while(this.stack.head?.next?.next != null ){
            this.stack.head = this.stack.head.next
        }
        this.stack.head.next = null
        this.stack.head = head

    }
    public print() : void {
        this.stack?.print()
    }
}

let s : Stack = new Stack(0)
s.push(3)
s.push(4)
s.push(5)
s.push(6)
s.print()
console.log("----------------------------------")
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
s.print()
console.log("----------------------------------")
s.push(1)
s.push(2)
s.pop()
s.print()