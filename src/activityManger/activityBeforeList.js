import React from "react";
import "./css/activityManager.css"

function ActivityBeforeList() {
    return(
        <div>
            <p className="DayText">2018-12-08 일자 지난업무</p>
            <ul>
                <li>업무담당 : id, 수행순서 : seq, 수행활동 : activity</li>
                <li>완료요구 : <button>설정</button>, 완료자 : <button>기재</button></li>
            </ul>
        </div>
    )
}

export default ActivityBeforeList;