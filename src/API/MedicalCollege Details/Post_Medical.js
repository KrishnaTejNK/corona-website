import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Box.css'

const Posts = (props) =>{
  const [state,setState] = useState({
    click: false
  })

  let display = null;
  
  const toggleHandler = () => {
    setState({
        click: !state.click
    })
  }

  if(!state.click){
  display = (
  <Card.Body className = 'box' style={{ width: '18rem' }} onClick = {toggleHandler}>
   <Card.Title>{props.state}</Card.Title>
   <Card.Text>
   State : {props.state}
   <br />
      </Card.Text>
  </Card.Body>
)
  }
  else{
   display = (
    <Card.Body className = 'box' style={{ width: '18rem' }} onClick = {toggleHandler}>
     <Card.Title>{props.state}</Card.Title>
     <Card.Text>
     State : {props.state}
     <br />
      Name : {props.name}
      <br />
      City : {props.city}
      <br />
      Ownership : {props.ownership}
      <br />
      Admission capacity : {props.admissionCapacity}
      <br />
      Hospital beds : {props.hospitalBeds}
        </Card.Text>
    </Card.Body>
)
  }


    return (
      <div className="App">
        <div key={props.index}>
          {display}
          </div>
       </div>
    );
}

export default Posts;
