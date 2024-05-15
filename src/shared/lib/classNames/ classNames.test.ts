import { classNames } from './classNames';

describe('classNames', () => {
  test('should return the same className', () => {
    expect(classNames('foo')).toBe('foo');
  });

  test('should return true mod', () => {
    expect(classNames('', { red: true, hovered: false })).toBe(' red');
  });

  test('should return className and additional className', () => {
    expect(classNames('ali', { red: false }, ['blue'])).toBe('ali blue');
  });
});
