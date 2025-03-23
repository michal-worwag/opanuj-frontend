export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  } else if (firstName.length < 2) {
    errors.push('First name must be at least 1 characters');
  }

  if (!lastName) {
    errors.push('Last name is required');
  } else if (lastName.length < 2) {
    errors.push('Last name must be at least 1 character');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  } else if (typeof age !== 'number') {
    errors.push('Age must be a number');
  }

  return errors;
}
