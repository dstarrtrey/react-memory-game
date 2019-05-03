export const shuffleArr = arr => {
  const newArr = new Array(arr.length).fill(false);
  for (let x = 0; x < arr.length; x++) {
    const empties = newArr.reduce((a, e, i) => {
      e || a.push(i);
      return a;
    }, []);
    const rand = empties[Math.floor(Math.random() * empties.length)];
    newArr[rand] = arr[x];
  }
  return newArr;
};
