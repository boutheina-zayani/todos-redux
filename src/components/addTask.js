import { useState } from "react";
import { useDispatch } from "react-redux"
import {handleAdd} from '../JS/actions'



const AddTask =()=>{
   const [val,setVal]=useState("");
   
   const dispatch=useDispatch();

    return (
        <div>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <button onClick={()=>{ dispatch(handleAdd(val)) ;setVal("")}}>ADD</button>  
        </div>
        )
}
export default AddTask 


