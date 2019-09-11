import React, {Component} from 'react';
import db from '../firestore';
import {Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

export default class Notes extends Component {
  
  state = {
    notes: [],
  }

  componentDidMount(){
    db.collection('notes')
    .onSnapshot((snapShots) => {
      this.setState({
        notes: snapShots.docs.map(doc => {
          return {id:doc.id, data: doc.data()}
        })
      })  
    })
    } 

  render() {
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
        </Card>
        )) : console.log('De hecho no') }
      </div>
  )
}
}
