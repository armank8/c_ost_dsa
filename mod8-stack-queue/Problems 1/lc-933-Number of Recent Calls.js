class RecentCounter{
    constructor(){
        this.queue=[]
    }
    ping(t){
        this.queue.push(t);

        while(this.queue[0]< t-3000){
            this.queue.shift();
        }
        return this.queue.length;
    }
    showVal(){
        return this.queue;
    }
}
let rC = new RecentCounter();
console.log(rC.ping(1));
console.log(rC.ping(100));
console.log(rC.ping(3001));
console.log(rC.ping(3002));



console.log(rC.showVal());