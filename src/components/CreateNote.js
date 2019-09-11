import React, {Component} from 'react';
import db from '../firestore';
import { Input, InputGroup, Col, Row, Button} from 'reactstrap';

class CreateNote extends Component {
	state = {
		notes: [],
		inputLabel:'',
		inputTitle:'',
		inputText:'',
	  }
	  
	  
	//   changeValue = (event)=> (
	// 	this.setState({
	// 	  inputText:event.target.value
	// 	})
	//   );
	
	  action =() =>{
		const{inputText, inputTitle, inputLabel} = this.state;
		db.collection('notes').add({
		  label: inputLabel,
		  title: inputTitle,
		  text: inputText
		}).then(()=>{
		  console.log('Agregado')
		}).catch(()=>{
		  console.log('error')
		})
	  }
	
	  render() {
		const note= this.state;
		//console.log(note)
	
		return( 
		  <div> 
			<Row>
			  <Col xs='10'>
				<InputGroup>
				<Input 
				  placeholder = '#etiqueta' 
				  value = {note.inputValue}
				  onChange= {(event) => ( this.setState({ inputLabel: event.target.value }))}
				  />
				<Input 
				  placeholder = 'Título' 
				  value = {note.inputValue}
				  onChange= {(event) => ( this.setState({ inputTitle: event.target.value }))}
				  />
				  <Input 
				  placeholder = 'Nueva nota' 
				  value = {note.inputValue}
				  onChange= {(event) => ( this.setState({ inputText: event.target.value }))}
				  />
				</InputGroup>
			  </Col>
			  <Col xs ='2'>
				<div className = 'text-right'>
				  <Button color = 'info' onClick = {this.action}>
					Agregar
				  </Button>
				</div>
			  </Col>
			</Row>
		</div>
 )
}
}

export default CreateNote;