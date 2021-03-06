import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';

class ContactNumber extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
    click: false
}
  componentDidMount() {
    axios.get('https://api.rootnet.in/covid19-in/contacts')
    .then(response =>{
      console.log(response)
      const posts = response.data.data.contacts.regional;
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
      <td style = {{color: 'white'}}>{elements.loc}</td>
      <td style = {{color: 'white'}}>{elements.number}</td>
    </tr>
    )
  }


  render(){
    let posts = <p style={{textAign:'center'}}>Something went wrong!</p>
    let temporary = <div className = "grid">{posts}</div>
    let table = null
  

    return (
      <div className="App">
        

      <Card.Header style = {{color: 'white'}}>Helpline Numbers</Card.Header>
        <Card.Body>
          <Card.Text>

          </Card.Text>
        </Card.Body>
      <Card.Footer className="text-muted">Last updated April 26 2020</Card.Footer>

    <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th style = {{color: 'white'}}>Location</th>
      <th style = {{color: 'white'}}>Contact Number</th>
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

export default ContactNumber;