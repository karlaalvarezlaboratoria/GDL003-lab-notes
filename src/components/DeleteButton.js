import React, {Component} from 'react';
import db from '../firestore';
import {Button} from 'reactstrap';

// class DeleteButton extends Component {
//     state={
//         notes:[],
//         edit:false,
//         id: ''
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
//     }
//     return (
//         <Button>Borrar</Button>
//     );
//   }
      
//   export default DeleteButton;