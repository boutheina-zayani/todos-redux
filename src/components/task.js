
import { useDispatch } from "react-redux";
import { handleDelete, handleDone} from "../JS/actions";
import EditTask from './editTask'

const Task =({el})=>{
    const dispatch=useDispatch();
    
    return (<div>
      <p style={{textDecoration:el.isDone && "line-through"}}> {el.Description}</p>
        <button onClick={()=>dispatch(handleDone(el.id))}>Done</button>
        <button onClick={()=>dispatch(handleDelete(el.id))} >Delete</button>
        <EditTask el={el}/>
    </div>
    )
}
export default Task 


