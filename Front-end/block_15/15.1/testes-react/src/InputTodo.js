import React, { Component } from 'react'

export default class InputTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
      textTodo: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    })
  }

  attStateDoPai(stateFilho, callbackPai){
    this.setState({textTodo: ''})
    callbackPai(stateFilho)
  }

  render() {
    const { addTodo } = this.props
    const { textTodo } = this.state
    return (
      <div>
        <input onChange={this.handleChange} type="text" value={ textTodo } name="textTodo" placeholder="insira uma tarefa"/>
        <input type="button" value="Adicionar" onClick={()=> this.attStateDoPai(textTodo,addTodo)} />
      </div>
    )
  }
}
