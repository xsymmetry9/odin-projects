//Link List from Odin exercise
//Used ChatGPT as guidance

// Factory function to create a node
const createNode = (data) => {
    return{
        data: data,
        next: null,
    };
}

//Factory function to create a linked list
const createLinkedList = () =>{
    return{
        head: null,
        tail: null,
  

    //Create a function append that adds new value containing value
    // to the end of the list
    append(value){
        const newNode = createNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return newNode;
    },
    //Create a function prepend that add the new node at the 
    //start of the list

    prepend(value){
        const newNode = createNode(value);
        newNode.next = this.head;
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
        return newNode;
    },

    count(){
        let count = 1;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    },

    getHead(){
        return this.head;
    },

    getTail(){
        return this.tail;
    },

    at(index){
        if (index - 1 > this.count())
        {
            return null;
        }
        let current = this.head;
        let i = 0;
        while(current){
            if(i === index){
                return current;
            }
            current = current.next;
            i++;
        }
    },
    pop(){
        let current = this.head;
        while(current)
        {
            if (current === this.tail)
            {
                this.head = null;
                this.tail = null;
            }
            else if(current.next === this.tail)
            {
                this.tail = current;
                this.tail.next = null;
                return this.tail;
            }
            current = current.next
        }
    },

    contains(value){
        let current = this.head;
        while(current){
            if(current.data == value)
            {
            return true;
            } else {
                current = current.next;
            }
        }
        return false;

    },
    find(value){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.data == value){
                return index;
            } else {
                current = current.next;
                index++;
            }
        }
        return null;
    },
    insertAt(value, index){
        let current = this.head;
        const newNode = createNode(value);
        let position = 0;
        if (index === 0)
        {
            this.append(current);
        }
        while (current){
            if(position === index - 1)
            {
                newNode.next = current.next;
                current.next = newNode;
                return newNode;
            } else{
                current = current.next;
                position++;
            }
        }
    },

    remove(index){ 
        if(index === 0)
        {
            if(this.head.next)
            {
                this.head = this.head.next;
                return this.head;
            }
            else{
                this.head = null;
                this.tail = null;
                return null;
            }
        }  
        console.log(this.count());
        let current = this.head;
        let previous = null;
        let nodeIndex = 0;

        while(nodeIndex !== index){
            previous = current;
            current = current.next;
            nodeIndex++;
        }
        if(index === this.count())
        {
            this.tail = previous.next;
        }
        console.log(nodeIndex);
        console.log(previous);

    
    },

    toString(){
        let result = '';
        let current = this.head;
        while(current){
            result+= current.data.toString();
            current = current.next;
            }
        return result.trim();
        }

    }
}

const myList = createLinkedList();

myList.append('E');
myList.append("J");
myList.append("e")
myList.append("23");
console.log(myList.toString());

// console.log(myList.append("a!!!"));
// console.log(myList.insertAt("I love it", 1));

// console.log(myList.at(1));
console.log(myList.remove(2));


// console.log(myList.pop());
// console.log(myList.contains("s"));
// console.log(myList.toString());


