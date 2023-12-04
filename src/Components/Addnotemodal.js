import React from 'react';
import { Modal, Button, Form, ModalHeader, ModalBody} from 'react-bootstrap';
import Col from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useRef } from 'react';
import { useNotes } from '../Context/NotesContext';
import CloseButton from 'react-bootstrap/CloseButton';
import { useEffect } from 'react';

export default function Addnotemodal({onHide}) {


    const {addnote,fetchnotes}=useNotes();

            const title=useRef();
            const description=useRef();




            const handlesubmit=(e)=>{

                e.preventDefault();

                addnote(title.current.value,description.current.value);
                        onHide()
                        fetchnotes()

            }


        


  return (
    <>
    {/* <Modal.Header>Create New Note < closeButton></closeButton></Modal.Header> */}
    <ModalHeader >
          <Modal.Title>Create New Note</Modal.Title>
          {/* <button className="btn-close">  */}
          {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
          <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true" onClick={()=>onHide()}>&times;</span>
</button>
        </ModalHeader>
   
    <ModalBody>
    <Form onSubmit={handlesubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
              Title
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Title" ref={title} />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
             Desc
              </Form.Label>
              <Col sm="10">
                {/* <Form.Control type="text" placeholder="Description " ref={description} /> */}
                <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description " ref={description} ></textarea>
              </Col>
            </Form.Group>
            <Button type="submit" variant="primary" >
              Create
            </Button>{" "}
           
          </Form>
          </ModalBody>
          </>
  )
}
