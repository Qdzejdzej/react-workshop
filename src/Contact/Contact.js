import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render(props) {

    return (
      <div className={ this.props.classN }>
        <h4 className="human-name">{ this.props.human.name }</h4>
        <p> User nuber: { this.props.human.number }</p>
        <p> User email: { this.props.human.email }</p>
        <p> User address: { this.props.human.address }</p>

      </div>
    );
  }
}

export default Contact;
