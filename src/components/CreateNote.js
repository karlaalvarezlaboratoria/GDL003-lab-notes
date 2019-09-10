import React, {Component} from 'react';
import  firebase from 'firebase/app';
import db from 'firebase/firebase-firestore';

db.settings((timestampsInSnapshots: true));

class Note extends Component {
	// constructor (props) {
	//  	super (props)
	//  	this.state = {
	//  		title: props.title,
	//  		message: props.message
	//  	}
	// }
	// render () {
	// 	return (
	// 		<section className="noteContainer">
	// 			<header>
	// 				<p>{this.state.title}</p>
	// 			</header>
	// 			<section className="noteBody">
	// 				<p>{this.state.text}</p>
	// 			</section>

	// 			<button>Edit</button>
	// 			<button>Delete</button>
	// 		</section>
	// 	)
	// }
}

export default Note;