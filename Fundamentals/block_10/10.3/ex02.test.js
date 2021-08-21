const funcs = require('./ex02');

 // jest.mock('./ex02');

describe('testing some functions', () => {

  it('testing first function', () => {
    funcs.firstFunction.mockImplementation((str) => str.toLowerCase());

    expect(funcs.firstFunction('LUSCAO')).toMatch('luscao');
    expect(funcs.firstFunction).toHaveBeenCalled();
    expect(funcs.firstFunction).toHaveBeenCalledTimes(1);
    expect(funcs.firstFunction).toHaveBeenCalledWith('LUSCAO');
  });

  it('testing second functions', () => {
    funcs.secondFunction.mockImplementation((str) => str.charAt(str.length - 1));

    expect(funcs.secondFunction('lusca')).toMatch('a');
    expect(funcs.secondFunction).toHaveBeenCalled();
    expect(funcs.secondFunction).toHaveBeenCalledTimes(1);
    expect(funcs.secondFunction).toHaveBeenCalledWith('lusca');
  });

  it('testing third function', () => {
    funcs.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

    expect(funcs.thirdFunction('luscao','tonhao','vdd')).toMatch('luscaotonhaovdd');
    expect(funcs.thirdFunction).toHaveBeenCalled();
    expect(funcs.thirdFunction).toHaveBeenCalledTimes(1);
    expect(funcs.thirdFunction).toHaveBeenCalledWith('luscao','tonhao','vdd');
  });

  it('another test with the first function', () => {
    const first = jest.spyOn(funcs, 'firstFunction')
      .mockImplementation((str) => str.toLowerCase());
    
    expect(first('LUSCAO')).toMatch('luscao');
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('LUSCAO');

    funcs.firstFunction.mockRestore();
  
    expect(funcs.firstFunction('trybe')).toEqual('TRYBE')
   
  })
})

