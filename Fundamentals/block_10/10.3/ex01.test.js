const numbers = require('./ex01');

jest.mock('./ex01');


describe('Testing the random number generator', () => {
  it('should return a random number', () => {
    numbers.randomNumber.mockReturnValue(10);

    expect(numbers.randomNumber()).toEqual(10);
    expect(numbers.randomNumber).toHaveBeenCalled();
    expect(numbers.randomNumber).toHaveBeenCalledTimes(1);
  })

  it('should return divide a number for other', () => {
    numbers.randomNumber.mockImplementation((a, b) => a / b);

    expect(numbers.randomNumber(10, 2)).toEqual(5);
    expect(numbers.randomNumber).toHaveBeenCalled();
    expect(numbers.randomNumber).toHaveBeenCalledTimes(2);
    expect(numbers.randomNumber).toHaveBeenCalledWith(10, 2);
  })

  it('should do a lot of things', () => {
    numbers.randomNumber.mockImplementation((a, b, c) => a * b * c);

    expect(numbers.randomNumber(5, 5, 5)).toEqual(125);
    expect(numbers.randomNumber).toHaveBeenCalled();
    expect(numbers.randomNumber).toHaveBeenCalledTimes(3);
    expect(numbers.randomNumber).toHaveBeenCalledWith(5, 5, 5);

    numbers.randomNumber.mockReset();
    numbers.randomNumber.mockImplementation((a) => a * 2);

    expect(numbers.randomNumber(5)).toEqual(10);
    expect(numbers.randomNumber).toHaveBeenCalled();
    expect(numbers.randomNumber).toHaveBeenCalledTimes(1);
    expect(numbers.randomNumber).toHaveBeenCalledWith(5);
  })
})