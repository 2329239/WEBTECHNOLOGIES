// // Values and variables
// let country = 'Nepal';
// let continent = 'Asian';
// let population = 29136808;
// console.log(typeof country)
// console.log(typeof continent)
// console.log(typeof population)
// console.log(country)
// console.log(continent)
// console.log(population)


// // data Types

// let isIsland = false;
// let language;
// console.log(typeof isIsland)
// console.log(typeof language)

// let const and var

// let language = 'Neplali';
// const country = 'Nepal';
// const continent = 'Asian';
// const isIsland = false;
// isIsland = true; // it will show an error as const value value cannot be changeable
// console.log(isIsland)

//Basic operators

// let population = 29136808;
// let country = 'Nepal';
// let continenet = 'Asian';
// let language = 'Nepali';
// console.log(population/2);
// population++;
// console.log(population)
// console.log(population>6);
// console.log(population<33);
// // const description1 =
// // country +
// // ' is in ' +
// // continenet +
// // ', and its ' +
// // population +
// // ' million people speak ' +
// // language;
// // console.log(description1);

// // Strings and Template Literals
 
// const description = `${country} is in ${continent}, and its ${population} milliom speak ${language}`;
// console.log(description)

// // Taking Decision: if/else Statements
// let country = 'Nepal';
// let population = 23
// if (population > 33) {
//     console.log(`${country}'S population is above average`);
// } else {
//     console.log(
//         `${country}'S population is ${33 - population} million below average`,
//         );
// }

// Type Conversion and Coercion
// console.log('8' - '5'); // -> 3
// console.log('15' - '5' + '15'); // -> 1015
// console.log('15' - '5' + 15); // -> 25
// console.log('123' < 57); // -> false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143 

//Equality Operators: == vs. ===

// const numNeighbours = prompt(
//     'How many neighbour countries does your country have?',
//     );

    //Later : This helps us prevent bugs

    // const numNeighbours = Number(
    //     prompt('How many neighbour countries does your country have?'),
    //     );

    //     if (numNeighbours === 1) {
    //         console.log('Only 1 border!');
    //     } else if (numNeighbours > 1) {
    //         console.log('More than 1 border');
    //     } else {
    //         console.log('No borders');
    //     }

    // Logical operators
    // if (language === 'english' && population < 50 && !isIsland)
    // {
    //     console.log(`You should live in ${country} :)`);
    // } else {
    //     console.log(`${country} does not meet your criteria : (`);
    // }

    // The switch statement
//     let language = 'spanish';
//     switch (language) {
//         case 'chinese':
//         case 'mandarin':
//             console.log('MOST number of native speaker!');
//             break;
//         case 'spanish':
//             console.log('2nd place in number of native speaker!');
//             break;
//         case 'spanish':
// console.log('2nd place in number of native speakers');
// break;
//         case 'english':
// console.log('3rd place');
// break;
//         case 'hindi':
//             console.log('Number 4');
//             break;
//         case 'arabic':
//             console.log('5th most spoken language');
//             break;
//         default:
//             console.log('Great language too :D');
//     }

// The consitiona(ternary) operators
// console.log(
//     `${country}'S population is ${population > 33 ? 'above' :'below'} average`,
//     );

