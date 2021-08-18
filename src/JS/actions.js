import {HANDLEADD,HANDLEDONE,HANDLEDELETE, HANDLEEDIT} from './types.js'
export const handleAdd = (payload) => {
    return { type: HANDLEADD, payload };
  };
export const handleDelete = (payload) => {
    return { type: HANDLEDELETE, payload };
  };
export const handleDone = (payload) => {
    return { type: HANDLEDONE, payload };
  };
  export const handleEdit = (id,payload) => {
    return { type: HANDLEEDIT,id, payload };
  };
