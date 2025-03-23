// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import { renderItems } from './renderer';

const users: User[] = [
  { id: 1, name: 'John', age: 30, role: 'user' },
  { id: 2, name: 'Jane', age: 25, role: 'admin' },
  { id: 3, name: 'Jack', age: 40, role: 'user' },
];

describe('User renderer', () => {
  test('should render all users if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(3);

    expect(container.innerHTML).toMatch(`
    <ul>
      ${users
        .map(
          (user) =>
            `<li>${user.role === 'admin' && '(Admin)'} Name: ${
              user.name
            }, Age: ${user.age}</li>`
        )
        .join('')}
    </ul>`);
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const allowedUsers = users.filter((user) => user.role === 'user');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(
      allowedUsers.length
    );

    expect(container.innerHTML).toMatch(`
    <ul>
      ${allowedUsers
        .map(
          (user) =>
            `<li>${user.role === 'admin' && '(Admin)'} Name: ${
              user.name
            }, Age: ${user.age}</li>`
        )
        .join('')}
    </ul>`);
  });
});
