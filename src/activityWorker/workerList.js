import React from "react";
import { Link } from "react-router-dom";
import "./css/workerList.css";

function List(props) {
    return <li className="userMenu"><Link to={"/worker/"+props.name}>{props.name}</Link></li>;
}

function WorkerList(props) {
    const values = props.values;
    const userList = values.map((value)=>
        <List key={value.id} name={value.id}/>
    )
    return(
        <div>
            <h2>업무담당자</h2>
            <ul>
                {userList}
            </ul> 
        </div>

    );
};

export default WorkerList