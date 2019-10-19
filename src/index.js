module.exports = function multiply(first, second) {
  // your solution

  //const firstBigInt = BigInt(first);
  //const secondBigInt = BigInt(second);
  // const answer = (firstBigInt * secondBigInt).toString();

  const firstArray = first.split('').reverse();;
  const secondArray = second.split('').reverse();
  let thirdArray = [];  

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
   
    let curRank = j+i;
    thirdArray = nanToZero(thirdArray, j+i);        
    thirdArray[curRank] = thirdArray[curRank] + parseInt(firstArray[i])*parseInt(secondArray[j]);        
    thirdArray = upNextTen(thirdArray, curRank);      
    }
    
  }
  
let answer = thirdArray.reverse().join("");
return answer;
}

function upNextTen(thirdArray, i){
  let debug = false;

  let j = i;
      while (thirdArray[j] >= 10) { // выводит 0, затем 1, затем 2  
        thirdArray = nanToZero(thirdArray, j+1);              
        thirdArray[j+1] = thirdArray[j+1] + Math.floor(thirdArray[j] / 10);
        thirdArray[j] = thirdArray[j] - Math.floor(thirdArray[j] / 10)*10;
        if (thirdArray[j+1] >=10) j++;        
      }
      return thirdArray;

}
function nanToZero(thirdArray, j){
    if(isNaN(thirdArray[j])) thirdArray[j] = 0;

    return thirdArray;
}