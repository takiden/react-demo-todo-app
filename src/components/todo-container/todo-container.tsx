import React, { MouseEventHandler } from 'react';
import AddButton from '../../UI/add-button/add-button';
import './todo-container.css';

const TodoContainer:React.FC = (props) => {

    const addButtonClickHandler:MouseEventHandler = (event) => {  
        console.log(`add item`);
     }
    
    const toggleClickHandler: MouseEventHandler = (event) => { 
        console.log(`toggle handler`);
     }
    return(
    <div className="container">
        <input className="container__header" type="text" placeholder="Title..."/>
        <div className="container__body">

        </div>
        <div className="container__footer">
            <div className="container__footer--toggle" onClick={toggleClickHandler}>
                TOGGLE
            </div>
            <AddButton additionalClasses="addButton__background" width={20} height={20} clickHandler={addButtonClickHandler}/>
        </div>
    </div>
);
}

export default TodoContainer;