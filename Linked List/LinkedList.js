"use strict";
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(head) {
        this.head = head;
    }
    print() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
    lenght() {
        let count = 0;
        let temp = this.head;
        while (temp) {
            count++;
            temp = temp.next;
        }
        return count;
    }
    append(new_data) {
        let add = new ListNode(new_data);
        if (this.head == null) {
            this.head = add;
        }
        else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = add;
        }
    }
    insert_head(new_head) {
        let add = new ListNode(new_head);
        let temp = this.head;
        add.next = temp;
        this.head = add;
    }
    find(value) {
        let temp = this.head;
        while (temp) {
            if (temp.data == value) {
                return true;
            }
            else {
                temp = temp.next;
            }
        }
        return false;
    }
}
let First = new ListNode(0);
let linked_list = new LinkedList(First);
for (let i = 0; i < 10; i++) {
    linked_list.append(i);
}
linked_list.insert_head(4);
linked_list.print();
console.log(linked_list.find(40), linked_list.find(4));
