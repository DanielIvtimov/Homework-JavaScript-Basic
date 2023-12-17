function calculatorForMinMaxSum(myNumber) {
    let max = Number.MIN_SAFE_INTEGER; 
    let min = Number.MAX_SAFE_INTEGER; 
    let sum = 0;
    let index = 0;
    while (index < myNumber.length) {
      let currentNumber = myNumber[index];
      if (currentNumber > max) {
        max = currentNumber;
      }
      if (currentNumber < min) {
        min = currentNumber;
      }
      sum += currentNumber;
      index++;
    }
    return { Max: max, Min: min, Sum: sum };
  }
  let myNumber = [3, 5, 6, 8, 11];
  const result = calculatorForMinMaxSum(myNumber);
  console.log(result);

  // Iskrajno za ova domasno si pomognav i od internet :D 
  // probuvav so while zaedno da raboti i vo if, else if, i else.
  // ne mi pravese error no nesto ne sakase da mi gi pecati max min i sum
  // pa zatoa gledav na internet kako bi mozel da gi kombiniram site tia so while
  // za da rabotat zaedno i na krajot mi ispadna kako sto e sega pisano 
  // me zbunuvase vo red 2 i red 3 ova (Number.MIN_SAFE_INTEGER);
  // dosega go nemav upotrebuvano pri sto isto taka 
  // me zbuni ova vo red 8 i red 11 oti imame if pa ponovo pak if 
  // no na krajot go razbrav toa bidejki edniot if e za max drugoto e za min
  // se nadevam deka vaka e dobro napisani :D 
  