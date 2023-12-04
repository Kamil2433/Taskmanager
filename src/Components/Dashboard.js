import React from 'react'
import { useLogin } from '../Context/LoginContext';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Login from './Login';
import Notes from './Notes';
import { useNotes } from '../Context/NotesContext';
import { useEffect } from 'react';





export default function Dashboard() {
    const {auth}=useLogin();
    const {fetchnotes,notes}=useNotes()
    

    useEffect(()=>{
    
      fetchnotes();
    // console.log(Notes);


},[]);
  return (


    (!auth)?<Login/>:<Notes given={notes}/>

  
  )
}
