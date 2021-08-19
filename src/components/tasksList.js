import { useState } from "react";
import { useSelector } from "react-redux";
import Task from './task' 
import {Button} from 'react-bootstrap'

const TasksList=()=>{
const x = useSelector((state) => state.todos);
const [dn,setDone]=useState("");


return (<div  >
      <Button variant="primary" size="sm" onClick={()=>setDone("")}>ALL</Button>{' '}
      <Button variant="danger" size="sm" onClick={()=>setDone(true)}>DONE</Button>{' '}
      <Button variant="success" size="sm" onClick={()=>setDone(false)}>NOT DONE</Button>
    
  
    {
    dn===true ?
    x.filter(el=>el.isDone===true).map(el=><div keys={el.id} style={{marginTop: "20px"}}><Task el={el}/></div>):
    dn===false ?
    x.filter(el=>el.isDone===false).map(el=><div keys={el.id} style={{marginTop: "20px"}}><Task el={el}/></div>):
    x.map(el=><div keys={el.id} style={{marginTop: "20px"}}><Task el={el}/></div>)
    }

    </div>)
}
export default TasksList
