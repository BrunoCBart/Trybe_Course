const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


test('testa função uppercase', (done) => {
  uppercase('string', (str) => {
    try {
      expect(str).toBe('STRING')
      done()
    } catch (error) {
      done(error)
    }
  })
})