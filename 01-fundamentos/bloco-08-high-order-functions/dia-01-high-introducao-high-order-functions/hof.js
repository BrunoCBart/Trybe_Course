const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (count) => {
  if (count % 2 === 0) {
    console.log(count, 'is even');
  }
});