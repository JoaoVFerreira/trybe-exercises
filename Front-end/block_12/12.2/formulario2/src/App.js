import React from "react";
import Select from "./Select";
import TextArea from "./TextArea";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      frutas: '',
      write: '',
      boolean: false,
      erro: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.fileInput = React.createRef();
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState(
      { [name]: value }
    )
  }

  render() {
    return (
      <div>
        <h1> Treino - Formulário Componentes Controlados</h1>
        <form>
          <fieldset>
            <legend>Conteudos a serem Preenchidos</legend>
          <div>
            <Select value={this.state.frutas} handleChange={this.handleChange}/>
          </div>
            <TextArea value={this.state.write} handleChange={this.handleChange}/>
          <div>
            <label>
              Lucão é tonhão ?
              <input type='checkbox' name='boolean' value={this.state.boolean} onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Insira seu melhor arquivo:
              <input type='file' ref={this.fileInput}/>
            </label>
          </div>
          <div>
            <label>
              Existe algum erro ?
              <input type='checkbox' name='erro' value={this.state.erro} onChange={this.handleChange}/>
            </label>
          </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default App;
