const _Node = (val = "", next = null) => {
    return {
        value: val,
        next: next
    }
}

const LinkedList = () => {
    let head = null;
    let tail = null;
    let length = 0;

    const prepend = (val) => {
        (!length) ? head = _Node(val, null) : head = _Node(val, head);
        length++;
        return head;
    }

    const append = (val) => {
        let node = _Node(val)
        let current;
        length++;

        if(!head){
            head = node;
        } else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        tail = node;
        tail.next = null;
    }

    const size = () => {
        console.log(`This linked list has a size of ${length} elements.`);
    }
    
    const getHead = () => {
        console.log(head);
        return head;
    }

    const getTail = () => {
        console.log(tail);
        return tail;
    }

    const at = (index) => {
        if(index >= length || index < 0){
            console.log("No index found.")
            return;
        }
        let indexCount = 0;
        let current = head;
        while(indexCount < index){
            current = current.next;
            indexCount++;
        }
        
        console.log(current);
        return current;
    }

    const pop = () => {
        if(length < 2){
            head = '';
        }
        let penuObj = at(length-2);
        penuObj.next = null;
        length--;
    }

    const contains = (val) => {
        let current = head;
        let indexCount = 1;
        while(indexCount < length){
            if(current.value === val || tail.value === val){
                console.log(`True. The linked list does contain the value of [${val}].`)
                return true;
            } else {
                current = current.next;
            }
            indexCount++;
        }
        console.log(`False. The linked list does not contain the value of [${val}].`);
        return false;
    }

    const find = (val) => {
        let current = head;
        let indexCount = 0;
        while(indexCount < length){
            if(current.value === val){
                console.log(indexCount);
                return indexCount;
            } 
            current = current.next;
            indexCount++;
        }
        return null;
    }

    const toString = () => {
        let current = head;
        while(current){
            console.log(`(Value: ${current.value}) (Next: ${JSON.stringify(current.next)})`);
            current = current.next;
        }
    }

    return { prepend, toString, append, size, getHead, getTail, at, pop, contains, find }
}


let ll = LinkedList();
ll.prepend(100);
ll.prepend(200);
ll.prepend(300);
ll.append('asdf');
ll.size();
ll.contains(200);
ll.contains('ds');
ll.at(2);
ll.pop();
ll.append(932);
ll.toString();

ll.at(2);
ll.find(200);

// ll.find(932);

// ll.getTail();
// ll.getHead();
// ll.size();
// ll.at(3);
// ll.find(100);

