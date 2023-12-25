import { useState } from 'react';
import clss from './Days.module.css';
import {  FaAngleUp  } from "react-icons/fa6";




const Days = props => {
    const [up , setUp] = useState(false);

    const iconClickHandler = () => {
       up ? setUp(false) : setUp(true);
    }   


return (
    <div>
        <div className={clss.daydv}>
            <h2 className={clss.day}>{props.day}</h2>    
            <FaAngleUp className={`${clss.icon} ${ up && clss.rotate }`} onClick={iconClickHandler}/>
        </div>
    </div>
)

}

export default Days;