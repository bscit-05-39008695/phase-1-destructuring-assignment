// Destructuring from the string of animal names
const farmAnimals = 'cow horse sheep pig chicken';

// Destructuring to declare sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// Destructuring to declare traditional animal names
const [bessie, , dolly, babe, little] = farmAnimals.split(' '); // Matches names correctly

// Destructuring to declare traditional animal colors
const [blackAndWhite, , black, pink] = ['cow', 'horse', 'sheep', 'pig']; // Black and white for cow, etc.

// Destructuring colors from the colors array
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Destructuring using initials for rainbow colors
const [r, o, y, g, b, , v] = colors;

// Assigning Indigo using its position
const indg = colors[5]; // Direct assignment

// Destructuring from the muppet object
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner } = muppet;

// Destructuring nested muppet object for songs and Kermit's details
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Correct destructuring for songs 2 and 4, and Kermit's job and partner
const { nestedJob, nestedPartner, album: { theMuppetMovie: { song2, song4 } } } = nestedMuppet;

// Logging the results for verification (optional)
console.log(moo, neigh, baa, oink, cluck); // Animal sounds
console.log(bessie, dolly, babe, little);   // Traditional animal names
console.log(blackAndWhite, black, pink);    // Traditional animal colors
console.log(red, orange, yellow, green, blue, indigo, violet); // Rainbow colors
console.log(r, o, y, g, b, v); // Initials for colors
console.log(indg); // Indigo
console.log(muppetName, color, song, job, partner); // Muppet properties
console.log(song2, song4, nestedJob, nestedPartner); // Nested Muppet songs and details


// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner