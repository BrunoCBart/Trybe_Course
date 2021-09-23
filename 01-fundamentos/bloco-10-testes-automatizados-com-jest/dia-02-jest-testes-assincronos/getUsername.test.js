const { TestWatcher } = require('@jest/core');

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('Test finduserById', () => {
  test('Acha o id', async () => {
    const user = await findUserById(1)
    expect(user).toBe(users[0])
  })
  test('Nao acha o id', async () => {
    try {
      await findUserById(2)
    } catch (error) {
      expect(error).toBe(new Error(`User with ${id} not found.`))
    }
  })
})