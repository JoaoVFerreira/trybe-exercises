import React from 'react'
import estados from './estados';

class App extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados pessoais</legend>
          <div>
            <label>
              Nome: 
              <input type='text' name='nome' required maxLength='40'/>
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type='email' name='email' required maxLength='50'/>
            </label>
          </div>
          <div>
            <label>
              CPF:
              <input type='text' name='cpf' required maxLength='11'/>
            </label>
          </div>
          <div>
            <label>
              Endereço:
              <input type='text' name='endereco' required maxLength='200'/>
            </label>
          </div>
          <div>) 
              Cidade:
              <input type='text' name='cidade' required maxLength='28'/>
            </label>
          </div>
          <div>
            <label>
              Estado:
              <select name='estado' required>
                <option>Selecione um Estado</option>
                {
                estados.map((state) =>
                (<option>{state}<option/>))
                }
              </select>
            </label>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default App;
