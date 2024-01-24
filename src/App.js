
import React from 'react';
import LoginContext from './Context/LoginContext';
import Login from './Components/Login';
import Notescontext from './Context/NotesContext';
import Dashboard from './Components/Dashboard';
import Navbaruse from './Components/Navbaruse';
import { useLogin } from './Context/LoginContext';

function App() {


    //  const {auth}=useLogin();
    


  return (

       <LoginContext>
        <Notescontext>



    <div className=" h1 mt-3 ml-2">
    <i class="fa-solid fa-note-sticky fa-xl" style={{color: "#10bbf4",margin:"4px"}}></i>
    TaskManager 
                 
    </div>

   {/* if(name){
      <Navbaruse/>
    }else{
      <div className='float-right'></div>} */}
    
   <Navbaruse/>

    <Dashboard/>
      

      </Notescontext>
       </LoginContext>
  );
}

export default App;
