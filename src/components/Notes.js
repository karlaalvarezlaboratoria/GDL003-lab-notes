import React, {Component} from 'react';
import db from '../firestore';

export default class Notes extends Component {
  
  state = {
    notes: []
  }

  componentDidMount(){
    db.collection('notes').get()
    .then((snapShots) => {
      this.setState({
        notes: snapShots.docs.map(doc => {
          //console.log(doc.data());
          //console.log({id:doc.id, data: doc.data()});
          return {id:doc.id, data: doc.data()}
        })
      })  
    }) /*error => {
      console.log(error)
    }*/
    
    } 
  
  render() {
    const note= this.state;
    console.log(note)

    return( 
      <div> 
        {note && note !== undefined? note.notes.map((note, key)=> (
          <div key={key}>
            <p>Fecha:{note.data.date}</p>
            <p>#{note.data.label}</p>
            <p>Título:{note.data.title}</p>
            <p>Texto:{note.data.text}</p>
            <p>Editar Eliminar</p>
          </div> 
        )) : console.log('De hecho no') }
      </div>
  )
}
}
