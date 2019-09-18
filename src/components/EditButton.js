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