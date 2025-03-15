class MyQueue{
    constructor(){
        this.inStack=[];
        this.outStack=[];
    }

    push(x){
        this.inStack.push(x)
    }

    pop(){
        if(this.outStack.length ===0){
            while(this.inStack.length>0){
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }

    peek(){
        if(this.outStack.length ===0){
            while(this.inStack.length>0){
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length-1];
    }

    empty(){
        return this.inStack.length === 0 && this.outStack.length === 0
    }
}

let q = new MyQueue();
q.push(1);
q.push(2);