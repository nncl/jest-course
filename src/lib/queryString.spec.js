const { queryString } = require('./queryString');

describe('Object to query string', () => {

  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Caue',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe(
      'name=Caue&profession=developer',
    );
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Caue',
      profession: 'developer',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe(
      'name=Caue&profession=developer&abilities=JS,TDD',
    );
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Caue',
      profession: 'developer',
      abilities: {
        first: 'JS',
        second: 'TDD'
      }
    };

    expect(() => {
      queryString(obj)
    }).toThrowError();
  });

});
