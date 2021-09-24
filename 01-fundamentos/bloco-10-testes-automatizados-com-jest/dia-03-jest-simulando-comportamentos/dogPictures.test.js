const { exp } = require('prelude-ls')
const service = require('./dogPictures')


describe('Testa requisições de dogPictures', () => {
  service.dogPicture = jest.fn()
  // afterEach(service.dogPicture.mockReset())

  it('Testa requisição resolvida', async () => {
    service.dogPicture.mockResolvedValue("request success")

    await expect(service.dogPicture()).resolves.toBe('request success')
  })

  it('Testa requisição falha', async () => {
    service.dogPicture.mockRejectedValue("request failed")

    await expect(service.dogPicture()).rejects.toBe('request failed')
  })
})