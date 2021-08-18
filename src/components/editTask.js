import {Modal,Button} from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleEdit } from '../JS/actions';

    
    
    const EditTask=({el})=>{
        const [val,setVal]=useState(el.Description);
        const dispatch=useDispatch();
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
           <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        </Modal.Body>
              <Modal.Footer>
              <Button variant="primary" onClick={()=>{ dispatch(handleEdit(el.id,val)) ;handleClose()}}>Save changes</Button>
               
                <Button variant="secondary" onClick={handleClose}>
                  close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      export default  EditTask  
     
