import React, {Component} from 'react';
import db from '../firestore';
import {Card, CardText, CardBody,CardTitle, CardSubtitle,/* Input, InputGroup, Col, Row, Button*/} from 'reactstrap';

export default class Notes extends Component {
  
  state = {
    notes: [],
    // inputValue:'',
  }

  componentDidMount(){
    db.collection('notes')
    .onSnapshot((snapShots) => {
      this.setState({
        notes: snapShots.docs.map(doc => {
          //console.log(doc.data());
          //console.log({id:doc.id, data: doc.data()});
          return {id:doc.id, data: doc.data()}
        })
      })  
    })
    } 

  // changeValue = (event)=> (
  //   this.setState({
  //     inputValue:event.target.value
  //   })
  // );

  // action =() =>{
  //   const{inputValue} = this.state;
  //   db.collection('notes').add({
  //     text: inputValue
  //   }).then(()=>{
  //     console.log('Agregado')
  //   }).catch(()=>{
  //     console.log('error')
  //   })
  // }

  render() {
    const note= this.state;
    //console.log(note)

    return( 
      <div> 
        {/* <Row>
          <Col xs='10'>
            <InputGroup>
              <Input 
              placeholder = 'Nueva nota' 
              value = {note.inputValue}
              onChange= {this.changeValue}>
              </Input>
            </InputGroup>
          </Col>
          <Col xs ='2'>
            <div className = 'text-right'>
              <Button color = 'info' onClick = {this.action}>
                Agregar
              </Button>
            </div>
          </Col>
        </Row> */}
        {note && note !== undefined? note.notes.map((note, key)=> ( 
          <Card key={key} style={{ width: '18rem' }}>
          <CardBody>
            <CardText>{note.data.date}</CardText>
            <CardTitle>{note.data.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">{note.data.label}</CardSubtitle>
            <CardText>{note.data.text}</CardText>
          </CardBody>
        </Card>
        )) : console.log('De hecho no') }
      </div>
  )
}
}
