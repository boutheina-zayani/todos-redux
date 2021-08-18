import { useState } from "react";
import { useSelector } from "react-redux";
import Task from './task' 

const TasksList=()=>{
const x = useSelector((state) => state.todos);
const [dn,setDone]=useState("");


return (<div>

<button onClick={()=>setDone("")}>ALL</button>
    <button onClick={()=>setDone(true)}>DONE</button>
    <button onClick={()=>setDone(false)}>NOT DONE</button>
    {
     dn===true ?
    
    x.filter(el=>el.isDone===true).map(el=><div keys={el.id}><Task el={el}/></div>):
     
    dn===false ?
    x.filter(el=>el.isDone===false).map(el=><div keys={el.id}><Task el={el}/></div>)
    :x.map(el=><div keys={el.id}><Task el={el}/></div>)
    }

    </div>)
}
export default TasksList
