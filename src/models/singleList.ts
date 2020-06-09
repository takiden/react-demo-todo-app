import moment from "moment";
import { Item } from "./item";

export class SingleList {
    private dateOfCreationOrEditing:string = "";
    private id:string;
    private items:Item[] = [];

    constructor(private Title:string) {
        this.updateDate()
        this.id = Date.now().toString();
    }

    get ListName(){
        return this.Title
    }
    set ListName(n:string){
        this.Title = n
    }
    
    get AllItems(){
        return this.items.slice()    
    }
    
    get Id(){
        return this.id
    }

    get DateOfLastUpdate(){
        return this.dateOfCreationOrEditing.length != 0 ? this.dateOfCreationOrEditing : moment().format('YYYY-MM-DD HH:mm');
    }

    private updateDate(){
        this.dateOfCreationOrEditing = moment().format('YYYY-MM-DD HH:mm');
    }
    addItem(item:Item){
        this.items.push(item)
        this.updateDate()
    }

    deleteItem(ind:number){
        try {
            this.items.splice(ind, 1);
            this.updateDate()
        } catch (error) {
            console.error(`index out of range (${ind})`)
        }
    }

}