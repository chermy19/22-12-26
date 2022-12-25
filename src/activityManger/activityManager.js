import React, { useState } from "react";
import { Link } from "react-router-dom";
import WorkingActvityList from "./workingActivityList";
import ActivityBeforeList from "./activityBeforeList";
import "./css/activityManager.css"

function Contents (props) {
    if(props.direction){
        return <WorkingActvityList/>;
    }else{
        return <ActivityBeforeList/>;
    } 
}

function ActivityManager() {
    const [page, setPage] = useState(true);

    function onClickEvent(e, direction){
        e.preventDefault();
        setPage(direction);
    }

    return(
        <div>
            <div>
                <h1>Activity Manager</h1>
            </div>
            <div className="div">
                <div>
                    <ul>
                        <li><Link to="/">업무활동</Link></li>
                        <li onClick={e => onClickEvent(e, true)}><Link to="/manager" >업무요약</Link></li>
                        <li onClick={e => onClickEvent(e, false)}><Link to="/manager" >지난업무</Link></li>
                    </ul>
                </div>
                <div>
                    <Contents direction={page}/>
                </div>            
            </div>
        </div>
    )
}

export default ActivityManager