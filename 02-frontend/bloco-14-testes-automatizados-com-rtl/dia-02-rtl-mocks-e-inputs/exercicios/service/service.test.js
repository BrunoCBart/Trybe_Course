const func = require('./functions')
test('Testa função rand', () => {
  func.rand = jest.fn().mockReturnValue(20)
  expect(func.rand()).toBe(20)
  expect(func.rand).toHaveBeenCalled()

  func.rand.mockImplementationOnce((a, b) => a * b)

  expect(func.rand(2, 5)).toBe(10)
  expect(func.rand()).toBe(20)

  func.rand.mockImplementation((a, b, c) => a * b * c)
  expect(func.rand(3, 3, 3)).toBe(27)
  expect(func.rand).toHaveBeenCalledWith(3, 3, 3)
  expect(func.rand(2, 6, 8)).toBe(96)
})

test('Modifica funções de string', () => {
  jest.spyOn(func, 'convertUpper')
    .mockImplementation((str) => str.toLowerCase())

  expect(func.convertUpper('Weak')).toBe('weak')

  func.firstLetter = jest.fn().mockImplementation(str => str[str.length - 1] )
  expect(func.firstLetter('Desenhar')).toBe('r')

  func.concatStr = jest.fn().mockImplementation((str, str2, str3) => str + str2 + str3)
  expect(func.concatStr('I', ' hate', ' snk ending')).toBe('I hate snk ending')

  func.convertUpper.mockRestore()
  expect(func.convertUpper('Should be upper')).toBe('SHOULD BE UPPER')
})

test('Testa função dogPictures que é uma requisição para api', async () => {
  func.dogPictures = jest.fn().mockResolvedValue('request sucess')
  await expect(func.dogPictures()).resolves.toBe('request sucess')

  func.dogPictures.mockRestore()
  func.dogPictures = jest.fn().mockRejectedValue('request failed')
  await expect(func.dogPictures()).rejects.toBe('request failed')
})
