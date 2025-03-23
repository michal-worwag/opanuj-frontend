import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name is required');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

  test('should return an error if first name is less than 1 character', () => {
    const errors = formValidator('J', 'Doe', 30);
    expect(errors).toContain('First name must be at least 1 characters');
  });

  test('should return an error if last name is less than 1 character', () => {
    const errors = formValidator('John', 'D', 30);
    expect(errors).toContain('Last name must be at least 1 character');
  });

  test('should return an empty array if all fields are valid', () => {
    const errors = formValidator('John', 'Doe', 30);
    expect(errors).toEqual([]);
  });

  test('should return an error if age is not a number', () => {
    const errors = formValidator('John', 'Doe', 'thirty');
    expect(errors).toContain('Age must be a number');
  });
});
