import React, {useState, useEffect} from 'react';
import './header-bar.css';
import moment from "moment";

const HeaderBar:React.FC = (props) => {
    const [currentTimeStamp, setCurrentTimeStamp] = useState(moment().format('DD MMM YYYY HH:mm'));
    useEffect(() => { 
        const interval = setInterval(() => { 
            setCurrentTimeStamp(previous =>{
                let current = moment().format('DD MMM YYYY HH:mm');
                if (previous !== current){
                    return current;
                }
                return previous;
            })
         }, 1 * 1000)
        return () => { 
            clearInterval(interval)
         } 
     })
    return(
    <div className="header flex">
        {currentTimeStamp}        
    </div>
);
}

export default HeaderBar;