

/*function factorial(n){
  if (n==0){
    return 1;
  }else{
    return factorial(n-1)*n;
  }
}

console.log(factorial(8));
*/
/*
let symbol= ""
for(let counter=0; counter<=6;counter++){
  symbol+="#"
  console.log(symbol);
}
*/

let list = "",
  text1 = "Fizz",
  text2 ="Buzz";
for(let numbers=0;numbers<=100;numbers++){
  list=numbers;
  if((numbers%5==0)&&(numbers%3==0)){
      console.log(`${text1}${text2}`);
    }
  else if((numbers%3==0) &&(numbers!=0)){
  console.log(text1);
  }else if((numbers%5==0)&&(numbers!=0)){
  console.log(text2);
  }
  // else if((numbers%5==0)&&(numbers%3==0)){
  //   console.log(`${text1}${text2}`);
  // }
  else( console.log(list));
}

