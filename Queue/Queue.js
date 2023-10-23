"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("../Linked List/LinkedList");
class Queue {
    constructor(head) {
        let node = new LinkedList_1.ListNode(head);
        this.queue = new LinkedList_1.LinkedList(node);
    }
    push(data) {
        this.queue.append(data);
    }
    unqueue() {
        if (this.queue.lenght() == 0) {
            return;
        }
        if (this.queue.lenght() == 1) {
            this.queue.head = null;
        }
        let temp = this.queue.head.next;
        this.queue.head = temp;
    }
    print() {
        var _a;
        (_a = this.queue) === null || _a === void 0 ? void 0 : _a.print();
    }
}
let q = new Queue(0);
q.push(3);
q.push(4);
q.push(5);
q.push(6);
q.print();
console.log("----------------------------------");
q.unqueue();
q.unqueue();
q.print();
console.log("----------------------------------");
q.push(1);
q.push(2);
q.unqueue();
q.print();
