import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useEffect } from "react";
import { useNotes } from "../Context/NotesContext";
import Addnotemodal from "./Addnotemodal";
import { Modal } from "react-bootstrap";
import Note from "./Note";

export default function Notes({ given }) {
  const { fetchnotes, notes } = useNotes();
  const [show, setmodal] = useState(false);
  const temp=Array.from(given);

  const closethemodal = () => {
    setmodal(false);
  };

  useEffect(() => {
    fetchnotes();
    // console.log(Notes);
  }, []);

  return (
    <>

    <div className="mt-5 m-5" style={{marginTop:"20%",paddingTop:"80px"}}>
      <Button className="primary " onClick={() => setmodal(true)}>
        Add New Note
      </Button>
      </div>

      <Modal show={show} onHide={closethemodal}>
        <Addnotemodal onHide={closethemodal} />
      </Modal>

      {/* <div className='col-md-3'> */}
          <div className=" row row-cols-3 g-3 ml-3" style={{width:"1000px"}}>
        {temp.length ? 

           temp.map((note, idx) => {
    
            // console.log("hii",note.title);
            return <Note  title={note.title} desc={note.description} id={note._id}   />
            // <Note  title={element.title} desc={element.description} />
          }):
          <div>No Notes Created</div>}
        </div>
        
    </>
  );
}
