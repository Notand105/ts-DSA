"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("../Linked List/LinkedList");
class Stack {
    constructor(head) {
        let node = new LinkedList_1.ListNode(head);
        this.stack = new LinkedList_1.LinkedList(node);
    }
    push(data) {
        this.stack.append(data);
    }
    pop() {
        var _a, _b;
        if (this.stack.lenght() == 0) {
            return;
        }
        else if (this.stack.lenght() == 1) {
            this.stack.head = null;
            return;
        }
        let head = this.stack.head;
        while (((_b = (_a = this.stack.head) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.next) != null) {
            this.stack.head = this.stack.head.next;
        }
        this.stack.head.next = null;
        this.stack.head = head;
    }
    print() {
        var _a;
        (_a = this.stack) === null || _a === void 0 ? void 0 : _a.print();
    }
}
let s = new Stack(0);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.print();
console.log("----------------------------------");
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.print();
console.log("----------------------------------");
s.push(1);
s.push(2);
s.pop();
s.print();
