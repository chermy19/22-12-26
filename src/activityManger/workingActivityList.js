import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";

function List(props) {    
    const [isFinish, setIsFinish] = useState("업무 전");

    useEffect(()=>{ axios.get("http://localhost:8080/manager/statics", 
    {
        params: {
            workingPeople: props.id
        }
    })
    .then((result) => {
        console.log(result.data);
        if(result.data.totJob[0]!==0){
            if(result.data.remainJob[0]===0){
                setIsFinish("전체 "+result.data.totJob+"개의 업무완료");
            }else{
                setIsFinish("전체업무 "+result.data.totJob+"개 중 "+result.data.remainJob+"개의 업무남음");                  
            }
        }           
    })}, [props.id]);

    return(
        <div>
            <li>업무담당: {props.id} <br/> 수행상황: {isFinish}</li>
            <li>
                <button><Link to={ "/setActivity/"+props.id }>중간요청</Link></button> 
            <br/> 
                <button><Link to={ "/setActivity/"+props.id }>추가요청</Link></button>
            </li>
            <br/>            
        </div>
    )
}

function WorkingActvityList() {
    const workingActivityList = data.map((value)=>
        <List key={value.id} id={value.id} isFinish={value.isFinish}/>
    )
    return(
        <ul>
            {workingActivityList}
        </ul>
    );
}

export default WorkingActvityList