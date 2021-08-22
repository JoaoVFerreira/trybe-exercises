const imp = require('./exDogApi');

describe('Test dog API', () => {
imp.dogApi = jest.fn();
afterEach(imp.dogApi.mockReset);

  it('should call dog API and return sucess', async () => {
    imp.dogApi.mockResolvedValue('request sucess')
    
    imp.dogApi();
    await expect(imp.dogApi()).resolves.toMatch('request sucess');
    expect(imp.dogApi).toHaveBeenCalled();
    expect(imp.dogApi).toHaveBeenCalledTimes(2);
  })

  it('should call dog API and return fail', async () => {
    imp.dogApi.mockRejectedValue('request failed');

    imp.dogApi();
    await expect(imp.dogApi()).rejects.toBe('request failed');
    expect(imp.dogApi).toHaveBeenCalled();
    expect(imp.dogApi).toHaveBeenCalledTimes(2);

  })
})