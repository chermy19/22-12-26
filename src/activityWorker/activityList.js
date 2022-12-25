import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/activityListStyle.css"

function List(props) {
    const [activeStat, setActiveStat] = useState(null);
    const [Finish, setIsFinish] = useState("미완료");
    const [Wait, setIsWait] = useState("비활성화");  

    useEffect(()=>{
        if(props.activeStat===null){
            setActiveStat("비활성화");
        }else{
            setActiveStat(props.activeStat);
        }
        if(props.isWait)
            setIsWait("수행대기 중");
    }, [props.activeStat, props.isFinish, props.isWait])

    
    function isActive(){
        axios.post("http://localhost:8080/main?id='user02'")
        .then(
            (result) => {
                
            },
            (error) => {
                alert(error.message);
            }
        )
    }

    function isWait(){
        axios.post("http://localhost:8080/main?id='user02'")
        .then(
            (result) => {
                
            },
            (error) => {
                alert(error.message);
            }
        )
    }
    
    function isFinish(){
        axios.post("http://localhost:8080/main/setFinish",
        {
            id: props.userName,
            actUnit: props.activity
        }).then((result) => 
        {
            setIsFinish(result.data);
            console.log(props.activity);
        }, (error) => 
        {
            alert(error.message);
        })
    }

    return (
        <div>
            <div>
                <li> 수행작업번호 : {props.seq}</li>
                <li> 수행작업내용 : {props.activity}</li>
                <li><button onClick={isActive}>활성화</button> : { activeStat }</li>
                <li><button onClick={isWait}>대기</button> : {Wait}</li>           
                <br/>
                <li> <button onClick={isFinish}>작업완료</button> : {Finish}</li>
            </div>
            <br/>           
        </div>
    );
}

function ActivityList(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/main?id="+props.userName)
        .then(
            (result) => {
                setItems(result.data);
            },
            (error) => {
                alert(error.message);
            }
        )
    }, [props.userName])

    function toggle_div(e, id) {
        e.preventDefault();
        const element = document.getElementById(id);
        element.style.display = ((element.style.display!=='block') ? 'block' : 'none');
    }

    const activity = items.map((value)=>{
        return <List key={value.seq+"-"+value.jobSeq} 
        seq={value.seq} userName={value.id}
        activity={value.activity} activeStat={value.activeStat} 
        isFinish={value.isFinish} isWait={value.isWait}/>             
    })

    const abc = (
        <div>
            <h3 onClick={e => toggle_div(e, 'toggle')}>수행업무활동</h3>
            <div id='toggle'>{activity}</div>                
        </div>
    )      

    const link = <button><Link to={"/setWorkerActivity/"+props.userName}>업무개시</Link></button>

    return(
        <div className="activityContent">
            <h2>{props.userName}의 업무활동</h2>
            <ul className="li">    
                {activity.length !== 0 ? abc : link}
            </ul>                
        </div>
    );
};

export default ActivityList
