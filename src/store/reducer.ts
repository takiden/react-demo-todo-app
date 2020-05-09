import { IInitState } from "../interfaces/initState.interface"

let initState:IInitState = {
    containers:[]
}

const reducer = (state = initState, action:{type:string, [key:string]:any})=>{
    return state
}

export default reducer