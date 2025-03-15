class MinStack{
    constructor(){
        this.stack=[];
        this.minStack=[];
    }

    push(x){
        this.stack.push(x);
        if(this.minStack.length===0 || x<= this.minStack[this.minStack.length-1]){
            this.minStack.push(x);
        }
    }

    pop(){
        if(this.stack.length === 0) return;
        let popped = this.stack.pop();
        if(popped === this.minStack[this.minStack.length-1]){
            this.minStack.pop();
        }
    }

    top(){
        return this.stack[this.stack.length -1];
    }

    getMin(){
        return this.minStack[this.minStack.length-1];
    }
}