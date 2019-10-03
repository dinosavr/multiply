module.exports = function multiply(first, second) {
  // your solution

  //const firstBigInt = BigInt(first);
  //const secondBigInt = BigInt(second);
  // const answer = (firstBigInt * secondBigInt).toString();

  const firstArray = first.split('').reverse();;
  const secondArray = second.split('').reverse();
  let thirdArray = [];  
  let debug = false;

  if(debug) console.log(firstArray, secondArray);

  for (let i = 0; i < firstArray.length; i++) {

    for (let j = 0; j < secondArray.length; j++) {
   
    let curRank = j+i;
    thirdArray = nanToZero(thirdArray, j+i);    

    if(debug) console.log('curRank = ' + curRank );
    if(debug) console.log(thirdArray[Math.max(i, j)] + ' + ' + parseInt(firstArray[i]) + ' * ' + parseInt(secondArray[j]) + ' = ');
    thirdArray[curRank] = thirdArray[curRank] + parseInt(firstArray[i])*parseInt(secondArray[j]);        
    thirdArray = upNextTen(thirdArray, curRank);      
    if(debug) console.log(thirdArray[curRank], thirdArray);
    }
    
      
      if(debug) console.log(thirdArray);
  }
  
let answer = thirdArray.reverse().join("");
return answer;
}

function upNextTen(thirdArray, i){
  let debug = false;

  let j = i;
      while (thirdArray[j] >= 10) { // выводит 0, затем 1, затем 2  
        thirdArray = nanToZero(thirdArray, j+1);          
        if(debug) console.log('upNextTen Start Loop. J = ' + j + ' thirdArray[j] = ' + thirdArray[j] + ' thirdArray[j+1] = ' + thirdArray[j+1]);
        thirdArray[j+1] = thirdArray[j+1] + Math.floor(thirdArray[j] / 10);
        if(debug) console.log('upNextTen j+1 = ' + (j+1) + ' thirdArray[j+1] = ' + thirdArray[j+1]);
        thirdArray[j] = thirdArray[j] - Math.floor(thirdArray[j] / 10)*10;
        if(debug) console.log('upNextTen j = ' + (j) + ' thirdArray[j] = ' + thirdArray[j]);
        if (thirdArray[j+1] >=10) j++;        

        if(j > 100) break;
      }

      return thirdArray;

}
function nanToZero(thirdArray, j){
    if(isNaN(thirdArray[j])) thirdArray[j] = 0;
    // if(isNaN(thirdArray[j+1])) thirdArray[j+1] = 0;

    return thirdArray;
}