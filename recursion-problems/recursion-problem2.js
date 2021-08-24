function sum(arr) {
    let count = 0
    
    for (let i = 0; i < arr.length; i++) {
      count = count + arr[i];
    }
    console.log(count);
  }
  
  sum([5, 1, 45, 6, 8]);