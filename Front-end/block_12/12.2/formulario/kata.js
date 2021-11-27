function digital_root(n) {
 let result = 0;
 if(n < 10){
   return n
 }

 for(let i = 0; i < n.toString().length; i+=1){
   result = result + n.toString().length[i]
 }
 return result;
}




console.log(52 + ''.split(''))