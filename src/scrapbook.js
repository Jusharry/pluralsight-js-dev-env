

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

// let list = "",
//   text1 = "Fizz",
//   text2 ="Buzz";
// for(let numbers=1;numbers<=100;numbers++)
// {
//   list=numbers;
//   if((numbers%5==0)&&(numbers%3==0)){
//       console.log(`${text1}${text2}`);
//     }
//   else if(numbers%3==0){
//   console.log(text1);
//   }else if(numbers%5==0){
//   console.log(text2);
//   }
//   // else if((numbers%5==0)&&(numbers%3==0)){
//   //   console.log(`${text1}${text2}`);
//   // }
//   else( console.log(list));
// }


// let symbol="";
// let size=8;
// for(let width=0;width<=8;width++){
//   if(width!=8){
//     for(let height=0;height<=8;height++){
//       if(symbol==symbol){
//         symbol+="#"
//       }else {
//         symbol= ""
//       }
//       console.log(symbol);
//     }
//   }else if(width==8){
//     "\n";
//   }
//     console.log(symbol);
// }

// let size = 8;
// let symbol = "";
// for(let width = 0; width<=size;width++){
//   for(let height = 0;height<size;height++){
//     if((width+height)%2==0){
//       symbol+=' ';
//     }else{
//       symbol+=" # ";
//     }
//   }
//   symbol+="\n";
// }
// console.log(symbol);

// function fizzBuzz(i){
//   let result = i;
//   for(let i=1; i<=100; i++){
//     if((i%5==0)&&(i%3==0)){
//             console.log('FizzBuzz');
//           }
//         else if(i%3==0){
//         console.log('Fizz');
//         }else if(i%5==0){
//         console.log('Buzz')
//         }
//         else(console.log(i));

//   }
//   return result;
// }
// console.log(fizzBuzz()); // function call that results in function
// //being run and output returned

// function findMin(a,b){
//   let x = Math.min(a,b);
//   return x;
// }
// console.log(findMin(0,10));
// console.log(findMin(0,-10));

function isEven(i){
  function find(value){
    if (i==0){
      return true;
    }else if(i * value ==1){
      return false;
   }else if((i-2)%2==0){
      return true;
  }

  }
  return find(1);
}
console.log(isEven(-5));
