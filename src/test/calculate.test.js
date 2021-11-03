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
});
