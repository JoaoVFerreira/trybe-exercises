const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

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

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};


describe('Exercising some exercises', () => {

  it('should do the right thing at upperCase', (done) => {
    uppercase('joao', (result) => {
      try {
        expect(result).toEqual('JOAO')
        done();
      } catch (error) {
        done(error);
      }
    })
  })

  it('should get the right userName', () => {
    return getUserName(1).then((data) => expect(data).toEqual('Mark'))
  })

  it('should get the error of userName', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => expect(error).toEqual(new Error('User with 3 not found.')))
  })

  it('using async/await when wrong', async () => {
    expect.assertions(1);
    try {
      await getUserName(3)
    } catch (error) {
      expect(error).toEqual(new Error('User with 3 not found.'))
    }
  })

  it('using async/await when right', async () => {
    const response = await getUserName(2);
    expect(response).toBe('Paul');
  })
})

describe('With API Giblhi Studios', () => {
   
  it('returning a list of', async () => {
    const response = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(response).toContain('sd-01-week4-5-project-todo-list');
  })

  it('returning a list of number 2', async () => {
    const response = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(response).toContain('sd-01-week4-5-project-meme-generator')
  })
})