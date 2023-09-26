"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.ListNode = ListNode;
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
exports.LinkedList = LinkedList;
