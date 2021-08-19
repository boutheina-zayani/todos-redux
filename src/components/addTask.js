import { useState } from "react";
import { useDispatch } from "react-redux"
import {handleAdd} from '../JS/actions'
import {InputGroup,FormControl,Button} from 'react-bootstrap'



const AddTask =()=>{
   const [val,setVal]=useState("");
   
   const dispatch=useDispatch();

    return (
        <div style={{width:"500px", marginLeft:"370px" ,marginTop:"20px"}}>
             <InputGroup className="mb-3">
                <FormControl
                placeholder="add a task ..."
                aria-label="add a task ..."
                aria-describedby="basic-addon2"
                value={val} onChange={(e)=>setVal(e.target.value)} 
                />
                {val!="" &&
                <Button variant="outline-secondary" id="button-addon2"onClick={()=>{ dispatch(handleAdd(val)) ;setVal("")}}>ADD
                </Button>}
            </InputGroup>
            </div>
        
        )
}
export default AddTask 


