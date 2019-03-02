//Mary West

// const firstName = 'Mary';
// const lastName = 'West';
// console.log(firstName + ' ' + lastName);
// console.log(`${firstName}      ${lastName}`);

// const firstName1 = 'Britney';
// const lastName1 = 'Spears';
// console.log(`${firstName1} ${lastName1}`);

// const firstName2 = 'Tori';
// const lastName2 = 'Amos';
// console.log(`${firstName2} ${lastName2}`);


const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};
namePrinter('Zoe', 'Ames');
namePrinter('John', 'Doe');
namePrinter('Mary', 'West');
namePrinter('Sarah', 'Best');
namePrinter('North', 'Star');

const nuggestizer = (animal) => {
    return `processed  ${animal}`;
}

console.log(nuggestizer('pig'));
console.log(nuggestizer('fish'));
console.log(nuggestizer('chicken'));
console.log(nuggestizer('student'));
console.log(nuggestizer('cow'));