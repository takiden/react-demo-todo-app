import React, { MouseEventHandler } from 'react';
import './backdrop.css';

const Backdrop:React.FC<{show:boolean, clickHandler:MouseEventHandler}> = (props) => {
    let content = props.show ? <div className="backdrop" onClick={props.clickHandler}></div> : null;
    return content;
}

export default Backdrop;