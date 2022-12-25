import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/workerList.css"

function SetActivityWorker() {
    const [user, setUser] = useState("");
    const [count, setCount] = useState(1);
    const params = useParams();

    useEffect(()=>{
        setUser(params.userName); 
    }, [params.userName])

    const [activities, setActivities] = useState([<Element key={new Date().getTime().toString()}/>]);
    const [text, setText] = useState([]);
    const [sentences, setSentences] = useState([]);

    function Element(){
        return <input type="text" onChange={e => getByText(e)}/>
    }

    function getByText(e){
        e.preventDefault();
        setText([...text, e.target.value]);
    }

    const [take, setTake] = useState(true);
    const [start, setStart] = useState(true);
    const [actNum, setActNum] = useState(0);

    function setElements(e){
        e.preventDefault(); 
        if(start){
            let num = Number(prompt("수행작업의 갯수?"));
            setActNum(num);
            setCount(num);
            setStart(false);
        }else{
            if(text[0]!==undefined && take===true){
                setSentences([...sentences, text]);
                setCount(count-1);
                setText("");
                if(count>1){
                    setActivities([...activities, <Element key={new Date().getTime().toString()}/>]); 
                }else{
                    setTake(false);
                    alert("지정한 갯수를 초과합니다.");
                }                   
            }else{
                alert("텍스트를 입력하세요.");
            }            
        }
    }

    const nav = useNavigate();

    function Publish(e){
        e.preventDefault();
        if(start===true){
            alert("작업을 모두 등록해주세요.");
        }else{
            console.log(sentences);
            axios.post("http://localhost:8080/main/Generate", {
                    activityNumber: actNum,
                    activity: sentences[sentences.length-1],
                    id: user,
                    jobSeq: 0                                                            
            }).then((result) => {alert("등록완료")}, (error) => {alert(error.message)});    
            nav(-1);        
        }
    }

    return(
        <div>
            <p>Set {user}'s Activity.</p>
            <div>
                <form>
                    <div className="Activities">
                        {activities}
                    </div>
                    <button onClick={e => setElements(e)}>Add Activity</button>
                    <button onClick={e => Publish(e)}>Publish Activity</button>
                </form>
            </div>
        </div>
    )
}

export default SetActivityWorker