import React from "react";
import WorkerList from './workerList';
import ActivityList from './activityList';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { data } from './workerListData';
import "./css/activityWorker.css"

function ActivityWorker() {
    const [userName, setUserName] = useState("");
    const params = useParams();

    useEffect(()=>{
        setUserName(params.userName); 
    }, [params.userName])

    return(
        <div>
            <div className="Title">
                <h1>업무활동</h1>
            </div>
            <div className="Content">
                <WorkerList values={data}/>
                <ActivityList userName={userName}/>            
            </div>            
        </div>
    )
}

export default ActivityWorker