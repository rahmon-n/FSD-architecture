import { classNames } from './classNames';

describe('classNames function', () => {
  it('should concatenate classes correctly', () => {
    expect(classNames('base')).toBe('base');
    expect(classNames('base', { 'is-active': true })).toBe('base is-active');
    expect(classNames('base', { 'is-active': true, 'is-hidden': false })).toBe(
      'base is-active'
    );
    expect(classNames('base', { 'is-active': true }, ['extra-class'])).toBe(
      'base extra-class is-active'
    );
  });

  it('should ignore falsy values', () => {
    expect(classNames('base', { 'is-active': false })).toBe('base');
    expect(classNames('base', { 'is-active': false }, ['extra-class'])).toBe(
      'base extra-class'
    );
  });

  it('should handle empty arguments', () => {
    expect(classNames('base', {}, [])).toBe('base');
  });
});
