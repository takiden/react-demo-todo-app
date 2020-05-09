import { IItem, TEXT, CHECKBOX } from "./item.interface";

export interface ITodoContainer{
    title:string,
    editTime:string
    items:IItem[]
    type: TEXT | CHECKBOX
}