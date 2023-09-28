import { LinkedList, ListNode } from "../Linked List/LinkedList";

class Queue{
    private queue: LinkedList 
    constructor(head : number){
        let node: ListNode = new ListNode(head)
        this.queue = new LinkedList(node)
    }
    public push(data:number):void {
        this.queue.append(data)
    }
    public unqueue():void{
        if(this.queue.lenght() == 0){
            return
        }
        if (this.queue.lenght() == 1){
            this.queue.head = null
        }
        let temp:ListNode | null = this.queue.head.next
        this.queue.head = temp

    }
    public print() : void {
        this.queue?.print()
    }
}

let q : Queue= new Queue(0)
q.push(3)
q.push(4)
q.push(5)
q.push(6)
q.print()
console.log("----------------------------------")
q.unqueue()
q.unqueue()
q.print()
console.log("----------------------------------")
q.push(1)
q.push(2)
q.unqueue()
q.print()