
export class ListNode{
    public data: number;
    public next: ListNode | null
    constructor(data:number){
        this.data = data
        this.next = null
    }
}

export class LinkedList{ 
    public head: ListNode | null
    constructor(head:ListNode){
        this.head = head
    }
    public print() : void {
        let temp = this.head
        while (temp != null){
            console.log(temp.data)
            temp = temp.next
        }
    }
    public lenght(): number{
        let count:number = 0
        let temp = this.head

        while(temp){
            count++
            temp = temp.next
        }

        return count
    }
    public append(new_data:number): void{
        let add = new ListNode(new_data)
        if(this.head == null){
            this.head = add
        }
        else{
            let temp = this.head
            while (temp.next){
                temp = temp.next
            }
            temp.next = add

        }
    }
    public insert_head(new_head:number):void{
        let add = new ListNode(new_head) 
        let temp = this.head
        add.next = temp
        this.head = add
    }
    public find(value:number):boolean{
        let temp = this.head
        while(temp){
            if (temp.data == value){
                return true
            } 
            else{
                temp = temp.next
            }
        }
        return false
    }
}

