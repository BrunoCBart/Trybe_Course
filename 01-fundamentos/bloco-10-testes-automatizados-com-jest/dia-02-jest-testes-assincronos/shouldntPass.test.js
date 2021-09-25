// test('Não deveria passar!', () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(5).toBe(5);
      console.log('Deveria falhar!');
      done()
    } catch (error) {
      done(error)
    }
  }, 500);
});