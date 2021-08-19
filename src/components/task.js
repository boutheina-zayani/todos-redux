
import { useDispatch } from "react-redux";
import { handleDelete, handleDone} from "../JS/actions";
import EditTask from './editTask'
import {ListGroup} from 'react-bootstrap'

const Task =({el})=>{
    const dispatch=useDispatch();
    
    return (<div>



<ListGroup horizontal>
  <ListGroup.Item style={{textDecoration:el.isDone && "line-through",width:"200px"}} >{el.Description}</ListGroup.Item>
  <ListGroup.Item>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onClick={()=>dispatch(handleDelete(el.id))} style={{fill: "red"}}>
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>

  </ListGroup.Item>
  <ListGroup.Item>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16" onClick={()=>dispatch(handleDone(el.id))} style={{fill: "green"}}>
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>

  </ListGroup.Item>
  <ListGroup.Item>
  <EditTask el={el}/>
  </ListGroup.Item>
</ListGroup>
            
    </div>
    )
}
export default Task 


