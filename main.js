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


// console.log functions printing
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

const dogBreed = (dogName) => {
    return `my favorite dog breed is a ${dogName}`;
}
console.log(dogBreed('goldendoodle'));
console.log(dogBreed('yorkie'));
console.log(dogBreed('Border Collie'));

//print to the dom functions

// const dogBreedDiv = document.getElementById('dog-breeds');
// dogBreedDiv.innerHTML = dogBreed('lab');

// const nuggestizerDiv = document.getElementById('nuggetizer')
// nuggestizerDiv.innerHTML = nuggestizer('bear');
// nuggestizerDiv.innerHTML += nuggestizer('kitten');

// general function to be used to combine the two functions above

const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML += textToPrint;
};
printToDom('dog-breeds',dogBreed('lab'))
printToDom('nuggetizer',nuggestizer('bear'))
printToDom('nuggetizer',nuggestizer('kitten'))
printToDom('nuggetizer', 'mmmmmmmmm');

let bandNumber = 1;

const addBand = (bandName, textToPrint ) => {
    // get band
    // text to send
    const bandText = `<h5>${bandNumber}. ${bandName} </h5>`
    //modify band number
    bandNumber = bandNumber + 1;
printToDom('band-list', bandText)
}

addBand('Metalica');
addBand('VHS Collection');
addBand('Future Generations');
addBand('Yoke Lore');