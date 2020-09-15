import React, { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import './Box.css'

const Table_MedicalCollege = (props) =>{
  const [state,setState] = useState({
    click: false
  })




    return (
      <div className="App">
<ReactBootStrap.Table striped bordered hover>
  <tbody>
    <tr key ={props.index}>
      <td>{props.state}</td>
      <td>{props.city}</td>
      <td>{props.ownership}</td>
      <td>{props.admissionCapacity}</td>
      <td>{props.hospitalBeds}</td>
    </tr>
 </tbody>
</ReactBootStrap.Table>
       </div>
    );
}

export default Table_MedicalCollege;

