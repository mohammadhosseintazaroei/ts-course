// const person: { name: string; age: number } = { name: "mohammad", age: 16 };

interface InterfacePerson {
  firstName: string;
  lastName: string;
  age: number;
  username?: string;
  email: string;
}


function newUser(person: InterfacePerson): InterfacePerson {
  return person;
}

function getAllUsers(users: InterfacePerson[]): Array<InterfacePerson> {
    return users
}
let personData: InterfacePerson = {
  firstName: "mohammad",
  lastName: "tazaroie",
  age: 16,
  username: "mohammad@753",
  email: "m.h.tazaroie753@gmail.com",
};

let users: Array<InterfacePerson> = [
    {
      firstName: "ali",
      lastName: "nagii",
      age: 15,
      username: "ali@753",
      email: "ali@gmail.com",
    },
    {
      firstName: "mohammad",
      lastName: "tazaroie",
      age: 16,
      username: "mohammad@753",
      email: "m.h.tazaroie753@gmail.com",
    },
  ];

console.log(newUser(personData));
console.log(getAllUsers(users));
