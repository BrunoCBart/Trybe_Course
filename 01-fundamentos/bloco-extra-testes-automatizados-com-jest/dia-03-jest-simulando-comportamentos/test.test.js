function randomNumber() {
  return Math.floor(Math.random() * 101)
}


describe('Funçaõ randomNumber', () => {

  test('Testa função randomNumber', () => {
    randomNumber = jest.fn().mockReturnValue(50)
    expect(randomNumber()).toBe(50)

    randomNumber = jest.fn().mockImplementation((a, b) => a / b)
    expect(randomNumber(50, 25)).toBe(2)

    randomNumber.mockReset()
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c)
    expect(randomNumber(2, 2, 2)).toBe(8)

  })
})
