import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { getTodo, deleteTodo } from "./actions/todoAction";

class App extends Component {

  componentDidMount() {
    console.log(`Updated!`);
    this.props.getTodo();
  };

  onHandleDelete = (id) => {
    this.props.deleteTodo(id);
  };

  render() {
    const { customers } = this.props.todo;
    console.log(customers);
    const customerLists = customers.length ? (
      customers.map(customer => {
        return (
          <div className="card-panel" key={customer.email}>
            <span className="card-close" onClick={this.onHandleDelete.bind(this, customer._id)}>&times;</span>
            <ul className="collection">
              <li className="collection-item">
                <span className="">Name</span>
                <span className="right">{customer.name}</span>
              </li>
              <li className="collection-item">
                <span className="">Email</span>
                <span className="right">{customer.email}</span>
              </li>
              <li className="collection-item">
                <span className="">Country</span>
                <span className="right">{customer.country}</span>
              </li>
              <li className="collection-item">
                <span className="">Id</span>
                <span className="right">{customer._id}</span>
              </li>
            </ul>
          </div>
        );
      })
    ) : (
      <div>
        <h4>No customers yet!!</h4>
      </div>
    )
    return (
      <div className="App">
        <Navbar />
        <br/><br/>
        <Modal />
        <div className="container">
          <br/><br/>
          <div className="row">
            <div className="col s12">
              { customerLists }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todoReducer
  };
};

export default connect(mapStateToProps, { getTodo, deleteTodo }) (App);
