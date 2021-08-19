// EXERCICIO 1

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Exercice 1', () => {

  it('should transform letters to upperCase', (done) => {
    uppercase('joao',(result) => {
      try {
        expect(result).toEqual('JOAO')
        done();
      } catch (error) {
        done(error)
      }
    })

  })
})

// EXERCICIO 2

/*const users = [
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

const getUserName = (userId) => findUserById(userId).then((user) => user.name); */


/* test('Verify if exists the current ID as a parameter', () => {
  // expect.assertion(1);
  return findUserById(2).then(response => {
    expect(response).toEqual({ id: 2, name: 'Paul' })
  })
})

it('Verify if return an error', () => {
    return findUserById(3).catch(response => {
      expect(response).toBe('[Error: User with 3 not found.]')
    })
})

it('Verify if exists the current ID', () => {
  getUserName(2).then(answer => {
    expect(answer).toBe('Paul')
  })
})

it('getUserName', () => {
  getUserName(1).then(resolve => expect(resolve).toEqual('Mark'))
}) */

/*describe('Tests linkeds to exercice 2', () => {
  describe('when the user ID exists', () => {

    it('return the username',() => {
      expect.assertions(1);
      return getUserName(1).then(response => expect(response).toEqual('Mark'))
    })
  })
  describe('when the use ID does not exists', () => {

    it('return an error', () => {
      expect.assertions(1);
      return getUserName(3).catch(response => expect(response).
      toEqual(new Error(`User with ${3} not found.`)))
    })
  })
}) */
