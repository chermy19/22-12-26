import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SetActivityManagered() {
    const [user, setUser] = useState("");
    const params = useParams();

    useEffect(()=>{
        setUser(params.userName); 
    }, [params.userName])

    const [activities, setActivities] = useState([]);

    function Element() {
        return <li><input type="text"></input></li>
    }

    function setElements(e){
        e.preventDefault(); 
        setActivities([...activities, <Element key={new Date().toTimeString()}/>]);
    }

    return(
        <div>
            <p>Set {user}'s Activity.</p>
            <div>
                <form>
                    <ul>
                        {activities}
                    </ul>
                    <button onClick={e => setElements(e)}>Add Activity</button>
                    <button>Publish Activity</button>
                </form>
            </div>
        </div>
    )
}

export default SetActivityManagered