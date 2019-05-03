export const shuffleArr = arr => {
  // Initializes new array with falsy values and loops over it
  const newArr = new Array(arr.length).fill(false);
  for (let x = 0; x < newArr.length; x++) {
    // With each loop generates new array of indexes with falsy values
    const empties = newArr.reduce((a, e, i) => {
      // Does not push current value to accumulator if truthy
      e || a.push(i);
      return a;
    }, []);
    // Random index from array of newArr's empty indexes
    const rand = empties[Math.floor(Math.random() * empties.length)];
    // Sets the empty index to the current index of input array
    newArr[rand] = arr[x];
  }
  return newArr;
};
