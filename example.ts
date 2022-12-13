//add the type for this array by 2 ways

// way 1
/*
type Person = {
  name: string,
  age:number,
  occupation?: string,
  role?: string
};
const personArray:Person[] = [
  {
    name: "Max Mustermann",
    age: 26,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];
*/



// way 2 using union type
type Person1 = {
  name: string,
  age:number,
  occupation: string,
};
type Person2 = {
  name: string,
  age:number,
  role: string,
};
type Person3 = Person1 | Person2


const personArray:Person3[] = [
  {
    name: "Max Mustermann",
    age: 26,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];