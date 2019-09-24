import React, {Component} from 'react';
import '../App.css'
//import db from '../firestore';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, /*Label*/ } from 'reactstrap';


class EditNote extends Component {
  constructor() {
    super();
    this.state = {
      note:[],
      modal: true,
      edit:true,
    };

    
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.history.push('/home')
  }
    
  //id = db.collection('notes').doc().id
    // getNote = (id) => {
    //      db.collection('notes')
    //      .doc(id)
    //      .get().then((doc)=>{
    //         if(doc.exists){
    //            this.setState({
    //                inputValue: doc.data().note,
    //                edit: true,
    //                id: doc.id
    //            }) 
    //         }else{
    //             console.log('El documento no existe')
    //         }
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // };

    // componentDidMount(){
    //   this.getNote()
    // }

  render(id) {
    const note= this.state;
    //console.log(note)
    return (
      <div>

        <Modal size= "1000em, 1000em" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Note</ModalHeader>
          <ModalBody>
            <InputGroup>
                {/* <Label for="Label">Label</Label> */}
                <Input className= 'Edit'
                margin ='1rem'
                placeholder = '#etiqueta' 
                value = {note.inputValue}
                onChange= {(event) => ( this.setState({ inputLabel: event.target.value }))}
                />
            </InputGroup>
            <InputGroup>
                {/* <Label for="Title">Title</Label> */}
                <Input className= 'Edit'
                margin ='1rem'
                placeholder = 'Título' 
                value = {note.inputValue}
                onChange= {(event) => ( this.setState({ inputTitle: event.target.value }))}
                /> 
            </InputGroup>
            <InputGroup>
                {/* <Label for="Text">Text</Label> */}
                <Input className= 'Edit'
                type="textarea"
                placeholder = 'Nueva nota' 
                value = {note.inputValue}
                onChange= {(event) => ( this.setState({ inputText: event.target.value }))}
                />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
          <Button color = 'info' onClick = {this.action}>Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditNote;




// ////////////////////////////////////7
// // import React, {Component} from 'react';
// // import db from '../firestore';
// // import {Button} from 'reactstrap';

// // class EditButton extends Component {
// //     state={
// //         notes:[],
// //         edit:false,
// //         id: ''
// //     } 
    
// //     action = () =>{
// //         const edit= this.state;
// //         !edit ? console.log('edit false') : 
// //         this.update();
// //     }

// //     getNote = (id) => {
// //         let docRef = db.collection('notes').doc(id);

// //         docRef.get().then((doc)=>{
// //             if(doc.exists){
// //                this.setState({
// //                    inputValue: doc.data().note,
// //                    edit: true,
// //                    id: doc.id
// //                }) 
// //             }else{
// //                 console.log('El documento no existe')
// //             }
// //         }).catch((error) => {
// //             console.log(error);
// //         })
// //     };

// //     update = () => {
// //       const {id, inputValue} = this.state;
      
// //       db.collection('notes').doc(id).update({
// //         text: inputValue
// //       }).then(()=> {
// //           console.log('actualizado')
// //       }).catch((error)=>{
// //           console.log(error);
// //       })
// //     }

// //     render(){
// //     return <Button onClick={this.action}>
// //         
// //     </Button>
// //     }
// //   }  
// //   export default EditButton;