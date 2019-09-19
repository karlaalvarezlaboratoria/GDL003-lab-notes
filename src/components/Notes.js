import React, {Component} from 'react';
import db from '../firestore';
import {Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Notes extends Component {
  
  state = {
    notes: [],
    edit: false,
    id: ''
  }

  componentDidMount(){ 
    const userUid= localStorage.getItem('uid'); 
    db.collection('notes').orderBy("date", "desc")
    .where("uid", "==", userUid)
    .onSnapshot((snapShots) => {
      this.setState({
        notes: snapShots.docs.map(doc => {
          return {id:doc.id, data: doc.data()}
        })
      })  
    })
    
    } 
  

  render(id) {
    const note= this.state;

    return( 
      <div> 
        {note && note !== undefined? note.notes.map((note, key)=> ( 
          <Card key={key} style={{ width: '18rem' }}>
          <CardBody>
            <CardText>{note.data.date}</CardText>
            <CardSubtitle className="mb-2 text-muted">#{note.data.label}</CardSubtitle>
            <CardTitle>{note.data.title}</CardTitle>
            <CardText>{note.data.text}</CardText>
          </CardBody>
          <div className="clearfix" style={{ padding: '.5rem' }}>
            <Link to= {'/note/'+key}>Edit</Link>
            <Link className='float-right' to= {'/delete/'+key}>Delete</Link>
          </div>
            
        </Card>
        )) : console.log('De hecho no') }
      </div>
  )
}
}
