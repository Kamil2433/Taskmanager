import React from "react";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { useLogin } from "../Context/LoginContext";
import { useNotes } from "../Context/NotesContext";

export default function Login() {
  const id = useRef();
  const name = useRef();
  const password = useRef();


  const {
    setid,
    reggisterauser,
    loginauser,
    setname,
    auth,
    success,
    setsucess,
  } = useLogin();
  const { setalert } = useNotes();

  const [loginview, setview] = useState(true);

  const handlesubmit = async (e) => {
    e.preventDefault();

    setid(id.current.value);
    const res = await loginauser(id.current.value,password.current.value);
    setalert(true);
  };

  const handleregisterationsubmit = async (e) => {
    e.preventDefault();

    const res = await reggisterauser(
      id.current.value,
      password.current.value,
      name.current.value
    );
    setalert(true);
    // if(success){

    //  const set=await  setmessage("Registeration successful,Please Login")
    //  const setsu=await setsucess(false)
    //   await setalert(true)
    //   // await setmessage(null)
    // }else{
    //  const set=await setmessage("Registeration unsuccessful, ID Unavailable try with different ID");
    //   const va=await  setvariant('danger')
    //   await  setalert(true)
    //   //  await setmessage(null);

    // }
  };

  return loginview ? (
    <div style={{ margin: 200 }}>
      <Form onSubmit={handlesubmit}>



        <Form.Group as={Row} className="mb-2" >
          <Form.Label column sm="2">
            ID
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="ID" className="loginid"  ref={id}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2" >
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="password" className="loginpass" ref={password} />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          login
        </Button>{" "}
        <Button onClick={() => setview(false)} variant="secondary">
          Click here to Register
        </Button>{" "}
      </Form>
    </div>
  ) : (
    // registeration
    <div style={{ margin: 200 }}>
      <Form onSubmit={handleregisterationsubmit}>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="name" ref={name} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
            ID
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="id" className="loginid" ref={id} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Password" className="loginpass" ref={password} />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Register
        </Button>{" "}
        <Button onClick={() => setview(true)} variant="secondary">
          Click here to Login
        </Button>{" "}
      </Form>
    </div>
  );
}
