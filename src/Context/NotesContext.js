import React, { useState } from 'react'
import { useContext } from 'react'
import { useLogin } from './LoginContext';
import useLocalStoragehook from '../hooks/useLocalstorage';

const Notecontext = React.createContext();





export function useNotes() {
    return useContext(Notecontext);
  }

export default function Notescontext({children}) {

    const {auth}=useLogin();
    const [notes,setnotes]=useLocalStoragehook('notes',' ')
    const [Showalert,setalert]=useState(false)
    const [message,setmessage]=useState('')
  const [variant,setvariant]=useState('success')




    async function addnote(inputtitle,inputdescription,selecteddate){

      const response=await fetch("https://cloudnote-backend-etc8.onrender.com/api/notes/addnote",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'auth-token':`${auth}`,
        },
        body:JSON.stringify({title:inputtitle,description:inputdescription,date:selecteddate})
        
      });
    const res=await response.json()

    if(notes.length===0){
   await setnotes(res)
    }else{

   await setnotes(notes.push(res))
    }
      

        setalert(true)
        setmessage('New Task Added')


        //  const output= await fetchnotes()

        //  console.log(output)

        //  fetchnotes()

  }


    async function fetchnotes(){

      const response=await fetch("https://cloudnote-backend-etc8.onrender.com/api/notes/getnotes",{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'auth-token':`${auth}`,
        },
      //  body:JSON.stringify({id:inputid,password:inputpassword})
        
      });
    const res=await response.json()
        setnotes(res);

         


  }

  async function updatenote(id,inputtitle,inputdesc,inputdate){


    console.log("here is the input to the fun",inputdesc,inputtitle)

    const response=await fetch(`https://cloudnote-backend-etc8.onrender.com/api/notes/update/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'auth-token':`${auth}`,
      },
      body:JSON.stringify({title:inputtitle,description:inputdesc,date:inputdate})
      
    });
  const res=await response.json()
      
     

      fetchnotes()
      setalert(true)
      setmessage('Task Updated')


}

async function deletenote(id){


  // console.log("here is the input to the fun",inputdesc,inputtitle)

  const response=await fetch(`https://cloudnote-backend-etc8.onrender.com/api/notes/delete/${id}`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'auth-token':`${auth}`,
    },
    // body:JSON.stringify({title:inputtitle,description:inputdesc})
    
  });
const res=await response.json()
    
   
    fetchnotes()


    setalert(true)
    setmessage('Task Deleted')


}






  return (
    <Notecontext.Provider
    value={{
         setnotes,notes,fetchnotes,addnote,updatenote,deletenote,Showalert,setalert,message,setmessage,variant,setvariant
    }}
  >
    {children}
  </Notecontext.Provider>
  )
}
