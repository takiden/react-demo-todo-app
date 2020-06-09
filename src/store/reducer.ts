import  * as at from "./actionsTypes";
import { IInitState } from "../interfaces/initState.interface"
import moment from "moment";
import { ITodoContainer } from "../interfaces/todoContainer.interface";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const initState:IInitState = {
    containers:[], 
    currentItemIndex:0,
    currentContainerIndex: 0
}
export const useTypedSelector: TypedUseSelectorHook<IInitState> = useSelector

const reducer = (state = initState, action:{type:string, [key:string]:any})=>{
    switch (action.type) {
        case at.CREATE_NEW_TODO_CONTAINER:
            console.log(`create new todo container...`);
            
            let newContainer:ITodoContainer = {type:"CHECKBOX",title:"",items:[...action.itmes],editTime:moment().format('DD-MM-YYYY')};
            let temp:ITodoContainer[] = [...state.containers, newContainer] 
            return {
                ...state,
                containers: temp,
            }           
        case at.SET_CURRENT_ITEM:
            return {
                ...state,
                currentItemIndex: action.index
            }
        case at.SET_CURRENT_CONTAINER:
            console.error('Not Implemented');
            return state;
        default:
            return state;
    }
}

export default reducer