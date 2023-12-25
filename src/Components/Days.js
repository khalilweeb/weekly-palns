import clss from './Days.module.css';
import { FaAngleDown , FaAngleUp  } from "react-icons/fa6";




const Days = props => {

return (
    <div>
        <div className={clss.daydv}>
            <h2 className={clss.day}>{props.day}</h2>    <FaAngleDown className={clss.icon} />
        </div>
    </div>
)

}

export default Days;