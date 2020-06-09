import  * as at from "./actionsTypes";
import { IInitState } from "../interfaces/initState.interface"
import { SingleList } from "../models/singleList";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const initState:IInitState = {
    toDoLists:[], 
}
export const useTypedSelector: TypedUseSelectorHook<IInitState> = useSelector

const reducer = (state = initState, action:{type:string, [key:string]:any})=>{
    switch (action.type) {
        case at.CREATE_NEW_TODO_LIST:
            console.log(`create new todo container...`);
            
            let newToDoList:SingleList = new SingleList(action.title);
            let temp:SingleList[] = [...state.toDoLists, newToDoList] 
            return {
                ...state,
                containers: temp,
            }           
        case at.ADD_ITEM:
            console.error('Not Implemented');
            return state
        case at.DELETE_ITEM:
            console.error('Not Implemented');
            return state;
        case at.EDIT_ITEM:
            console.error('Not Implemented');
            return state;
        case at.DELETE_LIST:
            console.error('Not Implemented');
            return state;
        default:
            return state;
    }
}

export default reducer