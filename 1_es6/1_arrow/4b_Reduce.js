/*
* 4b. Refactor this forEach to transform object (reduce will help)
**/

const persons = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Marina' },
];

const personsHashed = {};

persons.forEach(function(person) {
  personsHashed[person.id] = person.name;
});

it('returns hashed persons by ids', () => {
  expect(personsHashed).toEqual({
    '1': 'John',
    '2': 'Alex',
    '3': 'Marina'
  })
});
