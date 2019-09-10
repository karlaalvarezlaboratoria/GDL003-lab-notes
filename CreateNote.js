import React, {Component} from 'react';

class CreateNote extends Component {
	constructor (props) {
	 	super (props)
	 	this.state = {
            uid: props.uid,
	 		title: props.title,
            text: props.text,
            date: props.date
	 	}
	}
	render () {
		return (
			<section className="noteContainer">
				<header>
					<p>{this.state.title}</p>
				</header>
				<section className="noteBody">
					<p>{this.state.message}</p>
				</section>

				<button>Edit</button>
				<button>Delete</button>
			</section>
		)
	}
}

export default CreateNote;