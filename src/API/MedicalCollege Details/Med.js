import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post_Medical';
import { Card } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import './Box.css';

class Data extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
    click: false,
    search: ''
}
  componentDidMount() {
    axios.get('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
    .then(response =>{
      console.log(response)
      const posts = response.data.data.medicalColleges
      const updatedPosts = posts.map(post => {
          return {
              ...post,
          }
    })
    this.setState({posts: updatedPosts});
    console.log(response);
})
  }
  renderTable = (elements,index) =>{
    return(
      <tr key ={index}>
      <td style = {{color: 'white'}}>{elements.state}</td>
      <td style = {{color: 'white'}}>{elements.name}</td>
      <td style = {{color: 'white'}}>{elements.city}</td>
      <td style = {{color: 'white'}}>{elements.ownership}</td>
      <td style = {{color: 'white'}}>{elements.admissionCapacity}</td>
      <td style = {{color: 'white'}}>{elements.hospitalBeds}</td>
    </tr>
    )
  }


  render(){
    let posts = <p style={{textAign:'center'}}>Something went wrong!</p>
    let temporary = <div className = "grid">{posts}</div>
    let table = null
    if(!this.state.error){
      posts = this.state.posts.map((post,index) => {
          return <div>
            <Post 
          click = {this.state.click}
          index = {index}
          state = {post.state}
          name = {post.name}
          city = {post.city}
          ownership = {post.ownership}
          admissionCapacity = {post.admissionCapacity}
          hospitalBeds = {post.hospitalBeds}
      
      />
      </div>
        })
      }

    return (
      <div className="App" styles = {{marginDown: '10 px'}}>
      <Card.Header style = {{color: 'white'}}>Medical colleges and Beds</Card.Header>
        <Card.Body>

          <Card.Text>

          </Card.Text>
        </Card.Body>
      <Card.Footer className="text-muted">Last updated April 26 2020</Card.Footer>
    <div>
  

  <ReactBootStrap.InputGroup className="mb-3" styles = {{padding: '10px 10px'}} >
    <ReactBootStrap.FormControl
      placeholder="Search"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <ReactBootStrap.InputGroup.Append>
      <ReactBootStrap.Button variant="outline-secondary">Search</ReactBootStrap.Button>
    </ReactBootStrap.InputGroup.Append>
  </ReactBootStrap.InputGroup>



</div>

    <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th style = {{color: 'white'}}>State</th>
      <th style = {{color: 'white'}}>Name</th>
      <th style = {{color: 'white'}}>city</th>
      <th style = {{color: 'white'}}>ownership</th>
      <th style = {{color: 'white'}}>Admission Capacity</th>
      <th style = {{color: 'white'}}>Hospital Beds</th>
    </tr>
  </thead>
  <tbody>
    {this.state.posts.map(this.renderTable)}
  </tbody>
</ReactBootStrap.Table>

      </div>
    );
}
}

export default Data;
