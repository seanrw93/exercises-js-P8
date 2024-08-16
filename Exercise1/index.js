//Example: pairNumbers(1, 10) will return 2,4,6,8,10

function pairNumbers(start, end) {
    if (start > end || isNaN(start) || isNaN(end)) {
      throw new Error("Incorrect values")
    }
    
    if (start % 2 === 0) {
      return range(start, end).join(",");
    } else {
      return range(start + 1, end).join(",");
    }


}
  

function range (start, end) {
    return Array.from({ length: ((end - start) / 2) + 1 }, (_, i) => start + i * 2);
}

  try {
    console.log(pairNumbers(2, 10));
  } catch(e) {
      console.log(e)
  }
  
  
  
