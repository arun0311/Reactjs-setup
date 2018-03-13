import React, { Component } from 'react';
import { Router, Route, IndexRoute, HashHistroy } from 'react-router';
import './App.css';
import { Header } from './component/header';
import { Home } from './component/home';

var array = [
  {
    title: 'page1',
    body: 'page1body',
    label: '1',
    user: 'user'
  },
  {
    title: 'page2',
    body: 'page2body',
    label: '2',
    user: 'admin'
  }
]
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array
    };
    this.addNew = this.addNew.bind(this);
  }
  removedata(index){
    debugger;
    this.setState({
      array: this.state.array.filter(function(e,i){
        return i !== index;
      })
    })
  }
  addNew(data){
    this.setState({array: [...this.state.array, data]})
  }
  render() {
    return (
      <div className="container">
        <div><Header/></div>
        <div><Home/></div>
        <Input addInput={this.addNew}></Input>
        <h4> array count: <span className="badge">{this.state.array.length}</span></h4>
        <ul className="list-group">
          {this.state.array.map((array,index)=>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{array.title}</h4>
                <small><span className="label label-info">{array.label}</span></small>
                <p><span className="glyphicon glyphicon-user"></span>{array.user}</p>
                <button className="btn btn-danger btn-sm" onClick={this.removedata.bind(this,index)}><span className="glyphicon glyphicon-trash"></span>delete</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      label: '',
      user: 'select one'
    };
    this.addData = this.addData.bind(this);
    this.addNew = this.addNew.bind(this);
  }

  addData(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  addNew(event){
    event.preventDefault();
    this.props.addInput(this.state);
    this.setState({
      title: '',
      body: '',
      label: '',
      user: 'select one'
    })
  }

  render() {
    return (
      <div className="container">
        <h4>Add new array element</h4>
        <form className="form-horizontal" onSubmit={this.addNew}>
          <div className="form-group">
            <label htmlFor="title" className="col-sm-2 control-label">title</label>
            <div className="col-sm-10">
              <input name="title" type="text" className="form-control" id="title" value={this.state.title} onChange={this.addData} placeholder="title"></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="label" className="col-sm-2 control-label">label</label>
            <div className="col-sm-10">
              <input name="label" type="text" className="form-control" id="label" value={this.state.label} onChange={this.addData} placeholder="label"></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="body" className="col-sm-2 control-label">body</label>
            <div className="col-sm-10">
              <input name="body" type="text" className="form-control" id="body" value={this.state.body} onChange={this.addData} placeholder="body"></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="user" className="col-sm-2 control-label">user</label>
            <div className="col-sm-10">
              <select name="user" type="text" className="form-control" id="user" value={this.state.user} onChange={this.addData} placeholder="user">
                <option>user</option>
                <option>admin</option>
                <option>superadmin</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success"> add new </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default App;
