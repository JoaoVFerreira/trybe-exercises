const {getRepos} = require("./exercicios")

describe('Verify if exists in the repository ', () => {
  describe('todo-list & meme-generator', () => {

    it('todo-list only', async () => {
      const fecthTrybe = await getRepos('https://api.github.com/orgs/tryber/repos');
      expect(fecthTrybe).toContain('sd-01-week4-5-project-todo-list');
    })

    it('meme-generator', async () => {
      const fecthTrybe = await getRepos('https://api.github.com/orgs/tryber/repos');
      expect(fecthTrybe).toContain('sd-01-week4-5-project-meme-generator');
    })
  })
})