
import ActivityWorker from "./activityWorker/activityWorker";
import ActivityManager from "./activityManger/activityManager";
import SetActivityManagered from "./activityManger/setActivityManagered";
import SetActivityWorker from "./activityWorker/setActivityWorker";
import { Route, Routes } from 'react-router-dom';


function App(){
    (
        <Routes>
            <Route path="/" element={<ActivityWorker/>} />   
            <Route path="worker">
                <Route path=":userName" element={<ActivityWorker/>} />
            </Route>
            <Route path="setWorkerActivity">
                <Route path=":userName" element={<SetActivityWorker/>}/>
            </Route>
            <Route path="/manager" element={<ActivityManager/>}/>
            <Route path="setActivity">
                <Route path=":userName" element={<SetActivityManagered/>}/>
            </Route>
        </Routes>
    )
}

export default App
