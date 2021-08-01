import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';

class ContactLink extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
    click: false
}
  componentDidMount() {
    axios.get('https://api.rootnet.in/covid19-in/notifications')
    .then(response =>{
      console.log(response)
      const posts = response.data.data.notifications;
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
       <td style = {{color: 'white'}}>{elements.title.slice(0,10)}</td>
      <td style = {{color: 'white'}}>{elements.title}</td>
    <td style = {{color: 'white'}}><a href = {elements.link} style = {{color: 'black'}}> Link</a></td>
    </tr>
    )
  }


  render(){
    let posts = <p style={{textAign:'center'}}>Something went wrong!</p>
    let temporary = <div className = "grid">{posts}</div>
    let table = null
  

    return (
      <div className="App">
        
      <Card.Header style = {{color: 'white', justifyContent: 'center'}}>Notifications and Advisories</Card.Header>
        <Card.Body>
          <Card.Text style = {{color: 'white'}}>
              Click on Link to redirect to Guideline webpages
          </Card.Text>
        </Card.Body>
      <Card.Footer className="text-muted">Last updated April 26 2020</Card.Footer>


    <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th style = {{color: 'white'}}>Date</th>
      <th style = {{color: 'white'}}>Title</th>
      <th style = {{color: 'white'}}>Link</th>
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

export default ContactLink;