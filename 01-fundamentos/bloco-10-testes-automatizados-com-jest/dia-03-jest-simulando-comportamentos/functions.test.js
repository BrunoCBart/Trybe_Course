const functions = require('./functions')
jest.mock('./functions')


describe('test functions', () => {
  it('changes uppercase function behavior', () => {
    functions.uppercase.mockImplementation((str) => str.toLowerCase())

    expect(functions.uppercase('LOWERCASE')).toBe('lowercase')
    expect(functions.uppercase).toHaveBeenCalled()
    expect(functions.uppercase).toHaveBeenCalledTimes(1)
    expect(functions.uppercase).toHaveBeenCalledWith('LOWERCASE')

  })

  it('Changes firsleterOfStr to show last letter of str', () => {
    functions.firstLetterOfStr.mockImplementation((str) => str[str.length - 1])

    expect(functions.firstLetterOfStr('string')).toBe('g')
    expect(functions.firstLetterOfStr).toHaveBeenCalled()
    expect(functions.firstLetterOfStr).toHaveBeenCalledTimes(1)
    expect(functions.firstLetterOfStr).toHaveBeenCalledWith('string')

  })

  it('Changes concatStr', () => {
    functions.concatStr.mockImplementation((str, str2, str3) => str + str2 + str3)
    expect(functions.concatStr('I', ' am', ' confused')).toBe('I am confused')
    expect(functions.concatStr).toHaveBeenCalled()
    expect(functions.concatStr).toHaveBeenCalledTimes(1)
    expect(functions.concatStr).toHaveBeenCalledWith('I', ' am', ' confused')

  })

  // it('Changes uppercase again', () => {
  //   // functions.uppercase.mockRestore()
  //   const upprcaseFunction = jest.spyOn(functions, 'uppercase')
  //     .mockImplementation(a => a.toLowerCase())

  //   expect(upprcaseFunction('STRING')).toBe('string')

  //   functions.uppercase.mockRestore()

  //   expect(functions.uppercase('string')).toBe('STRING')
  // })
})