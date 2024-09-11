// //infinita
// const regressiva = (i) => {
//     while (i >= 0) {
//         console.log(i);
//         regressiva(i - 1);
//     }
// }
// regressiva(3);

const countdown = i => {
    console.log(i);
    // base case
    if (i <= 0){
        return;
    } else countdown(i - 1);
  };
  
  countdown(5);