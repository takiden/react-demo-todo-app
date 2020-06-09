import { ITodoContainer } from "./todoContainer.interface";

export interface IInitState{
    containers:ITodoContainer[],
    currentItemIndex:number,
    currentContainerIndex:number
}