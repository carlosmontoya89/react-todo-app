import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions/todoAction";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      country: ""
    };
  };

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const todo = {
      name: this.state.name,
      email: this.state.email,
      country: this.state.country
    }
    this.props.addTodo(todo);
  };

  render() {
    return (
      <div className="container">
        <a href="#!" className="btn green modal-trigger btn waves-effect waves-light" data-target="modal">Add Client</a>
        <div id="modal" className="modal">
          <div className="modal-content">
            <form onSubmit={this.onHandleSubmit.bind(this)}>
              <div className="input-field">
                <label htmlFor="name">Name</label>
                <input name="name" id="name" type="text" onChange={this.onHandleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="text" onChange={this.onHandleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="country">Country</label>
                <input name="country" id="country" type="text" onChange={this.onHandleChange}/>
              </div>
              <div className="modal-footer">
                <button type="submit" className="modal-close waves-effect waves-green btn-flat teal white-text">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todoReducer
  }
};

export default connect(mapStateToProps, { addTodo }) (Modal)
