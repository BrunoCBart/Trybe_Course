const math = require('./math')


describe('test math functions', () => {
  it('test math functions', () => {
    math.subtrair = jest.fn()
    math.multiplicar = jest.fn().mockReturnValue(10)
    math.somar = jest.fn().mockImplementation((a, b) => a + b)

    math.subtrair()
    math.multiplicar()
    math.somar()

    expect(math.subtrair).toHaveBeenCalled()
    expect(math.multiplicar).toHaveBeenCalled()
    expect(math.somar).toHaveBeenCalled()

    expect(math.multiplicar()).toBe(10)
    expect(math.somar(5, 10)).toBe(15)

  })
})

it('test funcao dividir', () => {
  const mockDividir = jest.spyOn(math, "dividir");
  mockDividir.mockReturnValue(15)
  mockDividir.mockReturnValueOnce(2);
  mockDividir.mockReturnValueOnce(5);

  expect(mockDividir(4, 2)).toBe(2)
  expect(mockDividir).toHaveBeenCalled()
  expect(mockDividir).toHaveBeenCalledTimes(1)
  expect(mockDividir).toHaveBeenCalledWith(4, 2)

  expect(mockDividir(10, 2)).toBe(5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(2);
  expect(mockDividir).toHaveBeenCalledWith(10, 2);

  expect(mockDividir(30, 2)).toBe(15);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(3);
  expect(mockDividir).toHaveBeenCalledWith(30, 2);
})

it('modifica funcao dividir', () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");
  mockSubtrair.mockImplementation((a, b) => a * b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(10, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(2);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(8);

  expect(mockSubtrair(10, 2)).toBe(8);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
})