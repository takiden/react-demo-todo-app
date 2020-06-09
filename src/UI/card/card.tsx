import React, { MouseEventHandler } from 'react';
import Backdrop from '../backdrop/backdrop';
import './card.css';

const Card: React.FC<{ show: boolean, clickHandler: MouseEventHandler, style?:any }> = (props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} clickHandler={props.clickHandler}></Backdrop>
            {props.show ? <div className="Card" style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
                ...props?.style
            }}>
                {props.children}
            </div>: null}
        </React.Fragment>
    );
}

export default Card;    