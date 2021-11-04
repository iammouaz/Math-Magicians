import operate from '../logic/operate';

describe('Operation Test', () => {
  it('Test Plus Opration', () => {
    expect(operate(4, 5, '+')).toBe('9');
  });

  it('Test Minus Opration', () => {
    expect(operate(9, 5, '-')).toBe('4');
  });

  it('Test Times Opration', () => {
    expect(operate(4, 5, 'x')).toBe('20');
  });

  it('Test Divide Opration', () => {
    expect(operate(30, 5, '÷')).toBe('6');
  });
  it('Test Mod Opration', () => {
    expect(operate(31, 5, '%')).toBe('1');
  });
});
