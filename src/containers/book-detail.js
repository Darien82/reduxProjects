import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
	render () {
		if (!this.props.book) {
			return <h2> Select A Book For More Information</h2>;
		}

		return (
			<div className="container" style={{float:'right'}}>
			<h3>Details for:</h3>
			<div className="books">Title:{this.props.book.title}</div>
			<div className="books">Title:{this.props.book.pages}</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return{

		book:state.activeBook
	};
	// body...
}



export default connect(mapStateToProps)(BookDetail);