const math = require ('./examplesMOCKS');
// jest.mock("./examplesMOCKS")

test('testando a func subtrair', () => {
  math.subtrair = jest.fn();

  math.subtrair(8,5);
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair).toHaveBeenCalledWith(8, 5);
  //expect(math.subtrair(8, 5)).toEqual(3);
});

test('testando a func multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar()).toBe(10);
})

test('testando a func somar', async () => {
  const mockSoma = jest.spyOn(math, 'somar');
  mockSoma.mockReturnValue(7);
  
  mockSoma();
  expect(mockSoma).toHaveBeenCalled();
  expect(mockSoma).toHaveBeenCalledTimes(1);
  await expect(mockSoma(3, 4)).toEqual(7);
  expect(mockSoma).toHaveBeenCalledWith(3, 4);
})

test('testando a func dividir', () => {
  const mockDividir = jest.spyOn(math, 'dividir');
  mockDividir.mockReturnValue(10);
  mockDividir.mockReturnValueOnce(2);
  mockDividir.mockReturnValueOnce(5);


  expect(mockDividir(10, 5)).toBe(2);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledWith(10, 5);
  expect(mockDividir).toHaveBeenCalledTimes(1);


  expect(mockDividir(10, 2)).toBe(5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledWith(10, 2);
  expect(mockDividir).toHaveBeenCalledTimes(2);


  expect(mockDividir(20, 2)).toBe(10);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledWith(20, 2);
  expect(mockDividir).toHaveBeenCalledTimes(3);

})


describe('when testting the last function of fixing learnings', () => {
  test('testando a func subtrair', () => {
  
    const mockSubtrair = jest.spyOn(math, 'subtrair');
    mockSubtrair.mockImplementation((a ,b) => a * b);
    mockSubtrair.mockReturnValue(20);

    expect(mockSubtrair(10, 2)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(2);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
  
    mockSubtrair.mockRestore();
    mockSubtrair.mockReturnValue(8);

    expect(mockSubtrair(10, 2)).toBe(8);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
  })
})