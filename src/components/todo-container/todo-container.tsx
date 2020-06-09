import React, { MouseEventHandler, useRef, useState, useEffect } from 'react';
import AddButton from '../../UI/add-button/add-button';
import './todo-container.css';
import { TEXT, CHECKBOX } from "../../interfaces/item.interface";
import { ITodoContainer } from "../../interfaces/todoContainer.interface";
import { CREATE_NEW_TODO_CONTAINER } from "../../store/actionsTypes";
import { useDispatch } from "react-redux";
import Item from '../../UI/item/item';


const TodoContainer: React.FC = (props) => {
    const dispatch = useDispatch()
    const [payload, setPayload] = useState<{type:CHECKBOX|TEXT,checked:boolean, payload:string}[]>([{ type:"CHECKBOX",checked: false, payload: "" }]);

    const [container, setContainer] = useState<ITodoContainer>()
    const titleRef = useRef<HTMLInputElement>(null);

    const addButtonClickHandler: MouseEventHandler = (event) => {
        console.log(`add item`);
        setPayload((prevList) => {
            return [...prevList, {
                type:"CHECKBOX",
                checked: false,
                payload: ""
            }
            ]
        })
    }

    const toggleClickHandler: MouseEventHandler = (event) => {
        console.log(`toggle handler`);
    }
    useEffect(() => { 
        return () => { 
            let hasContent = false
            payload.forEach(pl => {
                if (pl.payload.length > 0){
                    hasContent = true
                }
            });
            if (hasContent){
                dispatch({type:CREATE_NEW_TODO_CONTAINER, items:[...payload]})

            }
         }
     },[payload])

    return (
        <div className="container">
            <input className="container__header" ref={titleRef} type="text" placeholder="Title..." />
            <div className="container__body">
                {payload.map((item, ind) => <Item key={ind} type={item.type} payload={item.payload} index={ind} contIndex={}></Item>)}
            </div>
            <div className="container__footer">
                <button className="container__footer--toggle" onClick={toggleClickHandler}>
                    TOGGLE
            </button>
                <AddButton additionalClasses="addButton__background" width={20} height={20} clickHandler={addButtonClickHandler} />
            </div>
        </div>
    );
}

export default TodoContainer;