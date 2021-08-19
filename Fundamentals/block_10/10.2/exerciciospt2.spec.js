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


describe('Tests linkeds to exercice 2', () => {
  describe('when the user ID exists', () => {

    it('return the username', async () => {
      expect.assertions(1);
      const answer = await getUserName(1)
      expect(answer).toEqual('Mark')
    })
  })
  describe('when the use ID does not exists', () => {

    it('return an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(3)
      } catch (error) {
        expect(error).toEqual(new Error(`User with ${3} not found.`))
      }
    })
  })
})
