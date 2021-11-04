import calculate from '../logic/calculate';

describe('Calculate tests', () => {
  it('ordinary key', () => {
    expect(
      calculate({ total: null, next: null, operation: null }, '9'),
    ).toEqual({
      next: '9',
      total: null,
    });
  });
  it('ordinary key', () => {
    expect(
      calculate({ total: null, next: null, operation: null }, '0'),
    ).toEqual({
      next: '0',
      total: null,
    });
  });
  it('AC key', () => {
    expect(calculate({ total: '9', next: '12', operation: '-' }, 'AC')).toEqual(
      { total: null, next: null, operation: null },
    );
  });
  it('percentage key test 1', () => {
    expect(
      calculate({ total: null, next: '3.1', operation: null }, '.'),
    ).toEqual({ total: null, next: '3.1', operation: null });
  });
  it('percentage key test 2', () => {
    expect(
      calculate({ total: null, next: '11', operation: null }, '.'),
    ).toEqual({ total: null, next: '11.', operation: null });
  });
  it('percentage key test 3', () => {
    expect(calculate({ total: null, next: null, operation: '+' }, '.')).toEqual(
      { next: '0.' },
    );
  });
  it('percentage key test 4', () => {
    expect(calculate({ total: '5.1', next: null, operation: null }, '.')).toEqual(
      {},
    );
  });
  it('percentage key test 5', () => {
    expect(calculate({ total: null, next: null, operation: null }, '.')).toEqual(
      { total: '0.' },
    );
  });
  it('Equal Key Test Case 1', () => {
    expect(calculate({ total: null, next: '0', operation: null }, '=')).toEqual(
      {},
    );
  });
  it('Equal Key Test Case 2', () => {
    expect(calculate({ total: null, next: null, operation: null }, '=')).toEqual(
      {},
    );
  });
  it('User pressed an operation after pressing = Test', () => {
    expect(calculate({ total: '10', next: null, operation: null }, '+')).toEqual(
      { total: '10', next: null, operation: '+' },
    );
  });
  it('The user hasnt typed a number yet, just save the operation Test', () => {
    expect(calculate({ total: null, next: null, operation: null }, '+')).toEqual(
      { operation: '+' },
    );
  });
  it('save the operation and shift next into total', () => {
    expect(calculate({ total: null, next: '9', operation: null }, '+')).toEqual(
      {
        total: '9',
        next: null,
        operation: '+',
      },
    );
  });
});
