import React, {useRef,useState, FocusEventHandler} from 'react';
import { CHECKBOX,TEXT } from '../../interfaces/item.interface';


const Item:React.FC<{type:CHECKBOX|TEXT, payload:string, index:number, contIndex:number}> = (props) => {
    let content = null;
    const [clicked, setClicked] = useState(false);
    const [payload, setPayload] = useState(props.payload)

    let chbRef = useRef<HTMLInputElement>(null);
    let textRef = useRef<HTMLTextAreaElement>(null);


     const onSelectHandler:FocusEventHandler = (event) => { 
       console.log(`focux`)
      }

    const onChange = () => {
       setPayload((textRef.current?.value as string));
      }

    if (props.type === "CHECKBOX"){
        content = (<div  style={{textDecoration: clicked? "line-through": "none"}}>
            <input type="checkbox" ref={chbRef}/>
            <textarea rows={2} defaultValue={props.payload} onFocus={onSelectHandler} onChange={onChange} ref={textRef}></textarea>
        </div>);
    } else if (props.type === "TEXT"){
        content = (<div style={{textDecoration: clicked? "line-through": "none"}}>
            {/* <textarea rows={2} defaultValue={props.payload} onFocus={onSelectHandler} ref={textRef}>
            </textarea> */}
            <p>not implemented</p>
        </div>)
        
    }
    return content;
}

export default Item;