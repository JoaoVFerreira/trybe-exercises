import React, { Component } from 'react'
import InputTodo from './InputTodo'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      toDoList: [],
    }
    this.StoreClick = this.StoreClick.bind(this)
  }


  StoreClick(todo) {
    this.setState((prevState, _props) => ({
      toDoList: [...prevState.toDoList, todo]
    }))
  }

  changeColor(event) {
    event.target.style.backgroundColor = 'red';
  }

  render() {
    const { toDoList } = this.state
    return (
      <div>
        <InputTodo addTodo={(todo)=> this.StoreClick(todo)}/>
        <ul>
          {toDoList.map((item,index) => (
            <li onDoubleClick={this.changeColor} key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}


