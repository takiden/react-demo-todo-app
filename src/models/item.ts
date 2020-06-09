export class Item{
    constructor(private txt:string, private done:boolean){}
    changeState(){
        this.done = !this.done
    }
    changeText(ntxt:string){
        this.txt = ntxt
    }
}