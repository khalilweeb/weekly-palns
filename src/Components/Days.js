import { useState } from "react";
import clss from "./Days.module.css";
import { FaAngleUp } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const Days = (props) => {
  const [up, setUp] = useState(false);

  const iconClickHandler = () => {
    up ? setUp(false) : setUp(true);
  };

  return (
    <div className={clss.dayContainer}>
      <div className={clss.daydv}>
        <h2 className={clss.day}>{props.day}</h2>
        <div>
          <FaPlus className={clss.icon} onClick={props.click} />{" "}
          <FaAngleUp
            className={`${clss.icon} ${up && clss.rotate}`}
            onClick={iconClickHandler}
          />
        </div>
      </div>
      <div className={`${clss.content} ${up && clss.show}`}>
      <div>
        <h2>tasks</h2>
        <li>heloo</li>

      </div>
      <div className={clss.time}>
        <h2>Time</h2>
        <li>heloo</li>

      </div>
    </div>
    </div>
  );
};

export default Days;
