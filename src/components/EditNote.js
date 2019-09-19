import React, {Component} from 'react';
import '../App.css'
import db from '../firestore';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, /*Label*/ } from 'reactstrap';


class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      notes:[],
      edit:true,
      id: ''
    };

    // action = () =>{
    //     const edit= this.state;
    //     !edit ? console.log('edit false') : 
    //     this.update();
    // }


    // getNote = (id) => {
    //     let docRef = db.collection('notes').doc(id);
    //     docRef.get().then((doc)=>{
    //         if(doc.exists){
    //         this.setState({
    //             inputValue: doc.data().note,
    //             edit: true,
    //             id: doc.id
    //         }) 
    //          }else{
    //             console.log('El documento no existe')
    //             }
    //     }).catch((error) => {
    //     console.log(error);
    //     })
    //     };

    // update = () => {
    // const {id, inputValue} = this.state;

    // db.collection('notes').doc(id).update({
    // text: inputValue
    // }).then(()=> {
    //     console.log('actualizado')
    // }).catch((error)=>{
    //     console.log(error);
    // })
    // }
                

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.history.push('/home')
  }

  render() {
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
                value = {'khe'/*note.inputValue*/}
                onChange= {(event) => ( this.setState({ inputLabel: event.target.value }))}
                />
            </InputGroup>
            <InputGroup>
                {/* <Label for="Title">Title</Label> */}
                <Input className= 'Edit'
                margin ='1rem'
                placeholder = 'Título' 
                value = {'carajos'/*note.inputValue*/}
                onChange= {(event) => ( this.setState({ inputTitle: event.target.value }))}
                /> 
            </InputGroup>
            <InputGroup>
                {/* <Label for="Text">Text</Label> */}
                <Input className= 'Edit'
                type="textarea"
                placeholder = 'Nueva nota' 
                value = {'hago'/*note.inputValue*/}
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




////////////////////////////////////7
// import React, {Component} from 'react';
// import db from '../firestore';
// import {Button} from 'reactstrap';

// class EditButton extends Component {
//     state={
//         notes:[],
//         edit:false,
//         id: ''
//     } 
    
//     action = () =>{
//         const edit= this.state;
//         !edit ? console.log('edit false') : 
//         this.update();
//     }

//     getNote = (id) => {
//         let docRef = db.collection('notes').doc(id);

//         docRef.get().then((doc)=>{
//             if(doc.exists){
//                this.setState({
//                    inputValue: doc.data().note,
//                    edit: true,
//                    id: doc.id
//                }) 
//             }else{
//                 console.log('El documento no existe')
//             }
//         }).catch((error) => {
//             console.log(error);
//         })
//     };

//     update = () => {
//       const {id, inputValue} = this.state;
      
//       db.collection('notes').doc(id).update({
//         text: inputValue
//       }).then(()=> {
//           console.log('actualizado')
//       }).catch((error)=>{
//           console.log(error);
//       })
//     }

//     render(){
//     return <Button onClick={this.action}>
//         
//     </Button>
//     }
//   }  
//   export default EditButton;