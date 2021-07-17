const selectID = document.getElementById('state');
const stateOptions = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

function nameState() {
  for (let i = 0; i < stateOptions.length; i += 1) {
    let option = document.createElement('option');
    selectID.appendChild(option);
    option.innerText = stateOptions[i];
    option.value = stateOptions[i];
  }
}


/*let inputs = {
  nome: {
    maxLength = 40,
    required = true,
  },
  email: {
    maxLength = 50,
    required = true,
  },
  cpf: {
    maxLength = 11,
    required = true,
  },
  enderco: {
    maxLength = 200,
    required = true,
  },
  cidade: {
    maxLength = 28,
    required = true,
  },
  state: {
    type = 'select',
    required = true,
  },
  moradia: {
    type = 'radio',
    required = true,
  },
  resume: {
    maxLength = 1000,
    required = true,
  },
  cargo: {
    maxLength = 40,
    required = true,
  },
  description: {
    maxLength = 500,
    required = true,
  },
  date: {
    type = 'date',
    required = true,
  }
}

 function validateAll (input, nome){
   let trimmed = input.value.trim();
   let validation = input[nome];

   if (validation.required && trimmed.length === 0){
     return false;
   }
   if (validation.maxLength && trimmed.length > validation.maxLength){
     return false;
   }
   return true;
 }

validateAll ();*/




function validateSubmit (event){
  event.preventDefault();
}

window.onload = function () {
  nameState ();

  let buttonSubmit = document.querySelector('.btn-submit');
  buttonSubmit.addEventListener ('click', validateSubmit)

}

