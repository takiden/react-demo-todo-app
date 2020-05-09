import React, { MouseEventHandler } from 'react';
import './add-button.css';

const AddButton:React.FC<{clickHandler:MouseEventHandler, width?:number, height?:number, additionalClasses?:string}> = (props) => {
    
    let classes = "addButton" + " " + props.additionalClasses;
    
    return(

    <div className={classes} style={{width:props.width ? props.width +3 :"39", height: props.height ? props.height+3 :"39"}} onClick={props.clickHandler}>
        <img width={props.width ? props.width :"36"} height={props.width ? props.width :"36"} src="assets/plus.svg" alt="add"></img>
    </div>
);
}

export default AddButton;