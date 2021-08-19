import {HANDLEADD,HANDLEDELETE,HANDLEDONE,HANDLEEDIT} from "./types"

const initialState={
    todos :[{id:1,Description:"Task 1",isDone:false},{id:2,Description:"Task 2",isDone:false}]
};
 const Reducer =(state =initialState,action)=>{
     switch (action.type) {
        case HANDLEADD: return  {...state,todos:[...state.todos,{id:Math.random,Description:action.payload,isDone:false}]}
        case HANDLEDELETE: return {...state,todos:state.todos.filter(el=>el.id !== action.payload)}
        case HANDLEDONE: return {...state,todos:state.todos.map(el=>el.id == action.payload ? {...el,isDone:!el.isDone}:el)}
        case HANDLEEDIT: return {...state,todos:state.todos.map(el=>el.id=== action.id ? {...el,Description:action.payload}: el)}
            
       default :return state;
 }
   
}
export default Reducer