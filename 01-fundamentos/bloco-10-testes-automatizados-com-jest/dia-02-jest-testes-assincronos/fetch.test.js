const fetch = require('node-fetch');
const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};



test('Testa funcao getRepos', async () => {
  const names = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(names).toContain('sd-01-week4-5-project-todo-list')
  expect(names).toContain('sd-01-week4-5-project-meme-generator')


})