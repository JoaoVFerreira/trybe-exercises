/*const store = Redux.createStore();

const reducer = (state) => {
  return state
}

const store = Redux.createStore(reducer);

const reducer = (state = {login: false, email: ''}) => {
  return state
}

const store = Redux.createStore(reducer);*/

const ESTADO_INICIAL = {
  login: false,
  email: '',
}

const reducer = (state = ESTADO_INICIAL) => {
  return state
}

const store = Redux.createStore(reducer)

console.log(store.getState())

// {login: false, email: '',}

const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
      default:
        return state;
  }
}

const store = Redux.createStore(reducer)

store.dispatch(fazerLogin('joaovtf39@gmail.com'))

console.log(store.getState())

// {login: true, email: 'joaovtf39@gmail.com'}