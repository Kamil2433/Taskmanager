
import {Container , Alert,} from 'react-bootstrap'
import { useNotes } from '../Context/NotesContext';
import { useEffect } from 'react';
import { useState } from 'react';


function Alertcomponent(props) {  

    const {message,setalert,setmessage,variant,setvariant}=useNotes()

    // const [Showalert,setalert]=useState(false)
    // const [message,setmessage]=useState('')
    useEffect(() => {

      setTimeout(() => {
        
        setalert(false)
        setmessage(null)
        setvariant('success')
      }, 4000);
     
    }, []);



  return (  
    <div className="App">  
   <Container className='p-4'>  
   <Alert variant={variant}>

        {props.mess}    
    </Alert>  
</Container>  
    </div>  
  );  
}  
export default Alertcomponent;  