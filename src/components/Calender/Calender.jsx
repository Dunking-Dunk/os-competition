import './Calender.css'
import React from "react";
import moment from 'moment';

const Calender = () => {
    return (
        <div className="calender__container">
            <div className="calender__time">
                <h5 className="calender__time__time">{moment().format('h:ss')}</h5>
                <h5 className="calender__time__noon">{moment().format('a')}</h5>
            </div>
            <div className="calender__date">
            <h5 className="calender__date__date">{moment().format('MMMM Do YYYY')}</h5>
</div>
      </div>
 

    )
}

export default Calender