const selectID = document.getElementById('state');
const stateOptions = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

for( let i = 0; i < stateOptions.length; i+=1){
    let option = document.createElement('option');
    selectID.appendChild(option);
    option.className = 'state-list';
    option.innerText = stateOptions[i].innerText;
}
