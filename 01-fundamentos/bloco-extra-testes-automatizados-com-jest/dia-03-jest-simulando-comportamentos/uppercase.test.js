const service = require('./functions')

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const first = jest
      .spyOn(service, "uppercase")
      .mockImplementation(a => a.toLowerCase());

    expect(first("UPPERCASE")).toBe("uppercase");
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith("UPPERCASE");

    service.uppercase.mockRestore();

    expect(service.uppercase("lowercase")).toBe("LOWERCASE");
  });
});


// it('Changes uppercase again', () => {
//   // functions.uppercase.mockRestore()
//   const upprcaseFunction = jest.spyOn(functions, 'uppercase')
//     .mockImplementation(a => a.toLowerCase())

//   expect(upprcaseFunction('STRING')).toBe('string')
//   functions.uppercase.mockRestore()
//   expect(upprcaseFunction('string')).toBe('STRING')
// })