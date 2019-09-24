import React, {Component} from 'react';
import db from '../firestore';

class Delete extends Component {
    constructor (props) {
        super(props);
        this.state   = {
            note : ''
        }
     
    }

    
    delete = id => {
      
        this.ref = db
        .collection("notes")
        .doc(id).delete().then(()=>{
            
            console.log("ya se borró");
              
           }).catch((error)=>{
               console.log(error);
           })
    }
    
    
    
     render () {
    
         return(
        <div>        
            <button className='delete' onClick= {() => this.delete(this.props.id)}></button>               
        </div>
     )}
    }
     export default Delete;
    