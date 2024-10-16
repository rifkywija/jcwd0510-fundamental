class BankQueue {
    private queue: number[];  

    constructor() {
        this.queue = [];
    }

    enqueue(value: number): void {
        this.queue.push(value);  
    }

    dequeue(): number | null {
        if (this.queue.length === 0) {
            return null;  
        }
        return this.queue.shift()!;  
    }

    size(): number {
        return this.queue.length;  
    }
}

const bankQueue = new BankQueue();

bankQueue.enqueue(101);
bankQueue.enqueue(102);  
bankQueue.enqueue(103);  

console.log(bankQueue.size());  

console.log(bankQueue.dequeue());  


// NO 2

class Train{
    container: string[];
    maxSize: number;

    constructor(){
        this.container=["masinis"];
        this.maxSize=5;
    }

    private isFull(){
        return this.container.length >= this.maxSize;
    }

    private isEmpty(){
        return this.container.length===1;
    }

    showPassenger(){
        return{
            passenger:this.container
            .filter((value)=> value != "masinis")
            .join(","),
            remainingSeat:this.maxSize - this.container.length
        };
    }

    passengerIn (name:string){
        if(this.isFull()){
            return "train full";
        }

        if(this.container.includes(name)){
            return "passenger already axist";
        }

        this.container.push(name);
        return "add passenger success"
    }

    passengerOut(name:string){
        if(name === "masinis"){
            return "cannot remove masinis";
        }

        if(this.isEmpty()){
            return "train is empty";
        }

        const index=this.container.indexOf(name);

        if(index === -1){
            return "passenger not found";
        }

        this.container.splice(index, 1);
        return "remove passanger succes"
    }
}

const taksaka = new Train();

console.log(taksaka.passengerIn("joko"));
console.log(taksaka.passengerIn("bima"));
console.log(taksaka.passengerIn("siti"));
console.log(taksaka.passengerIn("budi"));
console.log(taksaka.passengerIn("joko4"));
console.log(taksaka.passengerIn("joko5"));
console.log(taksaka.passengerIn("joko6"));
console.log(taksaka.passengerIn("joko7"));

console.log(taksaka.showPassenger());

console.log(taksaka.passengerOut("budi"));
console.log(taksaka.passengerOut("budisadsadf"));

console.log(taksaka.showPassenger());



