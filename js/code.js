'use strict';

let fName = prompt('what is your name');
//console.log(fName);
alert('Welcome ' + fName);

let count = 0;

let uniSpecialization = prompt('Did you know i studied computer engineer? ', 'yes/y or no/n').toLowerCase();
//console.log(uniSpecialization);

while (uniSpecialization !== 'yes' && uniSpecialization !== 'y' && uniSpecialization !== 'no' && uniSpecialization !== 'n') {
  uniSpecialization = prompt('Did you know i studied computer engineer? please answer yes or no  ', 'yes/y or no/n').toLowerCase();
}

if (uniSpecialization === 'yes' || uniSpecialization === 'y') {
  alert('Im here if you want anythings in computer ');
  count++;

} else if (uniSpecialization === 'no' || uniSpecialization === 'n') {
  alert('Okay! at the moment you are know !');

}

// second question

let myAge = prompt('Did you know my age? ', 'yes/y or no/n').toLowerCase();
//console.log(myAge);

while (myAge !== 'yes' && myAge !== 'y' && myAge !== 'no' && myAge !== 'n') {
  myAge = prompt('Did you know my age ? please answer yes or no  ', 'yes/y or no/n').toLowerCase();
}

if (myAge === 'yes' || myAge === 'y') {
  alert('Hope to me long life');
  count++;

} else if (myAge === 'no' || myAge === 'n') {
  alert('Okay! my age is 24 !');

}

// third question

let colorLove = prompt('Did you know my lovely color ? ', 'yes/y or no/n').toLowerCase();
//console.log(colorLove);

while (colorLove !== 'yes' && colorLove !== 'y' && colorLove !== 'no' && colorLove !== 'n') {
  colorLove = prompt('Did you know my lovely color ? please answer yes or no  ', 'yes/y or no/n').toLowerCase();
}

if (colorLove === 'yes' || colorLove === 'y') {
  alert('Great! what about you ?');
  count++;

} else if (colorLove === 'no' || colorLove === 'n') {
  alert('Okay! my lovely color is gray!');

}

// question four

let favDrink = prompt('Did you know my favourite drink ? ', 'yes/y or no/n').toLowerCase();
//console.log(favDrink);

while (favDrink !== 'yes' && favDrink !== 'y' && favDrink !== 'no' && favDrink !== 'n') {
  favDrink = prompt('Did you know my favourite drink ? please answer yes or no  ', 'yes/y or no/n').toLowerCase();
}

if (favDrink === 'yes' || favDrink === 'y') {
  alert('Okay then give me some of it');
  count++;

} else if (favDrink === 'no' || favDrink === 'n') {
  alert('My favourite drink is Coffee!');

}

// question five

let loveflower = prompt('Did you know if i love flowers? ', 'yes/y or no/n').toLowerCase();
//console.log(loveflower);

while (loveflower !== 'yes' && loveflower !== 'y' && loveflower !== 'no' && loveflower !== 'n') {
  loveflower = prompt('Did you know if i love flowers ? please answer yes or no  ', 'yes/y or no/n').toLowerCase();
}

if (loveflower === 'yes' || loveflower === 'y') {
  alert('You are flower!');
  count++;

} else if (loveflower === 'no' || loveflower === 'n') {
  alert('Okay! i love flower so much espicially pink flower');
}
alert('Answer of questions : My uniSpecialization is Computer engineer , My age 24 , My lovely color is gray , My favourite drink is coffee, I love flower very much');

//Question 6
let w = 0;
while (w < 4) {
  let yearStudy = prompt('How many years have I studied at the university?  ', 'Please answer it in numeric ');
  if (yearStudy > '5') {
    alert('Too high !');
    w++;
    if (w === 4) {
      alert('years study is 5');
    }
  } else if (yearStudy < '5') {
    alert('Too low !');
    w++;
    if (w === 4) {
      alert('years study is 5');
    }
  } else if (yearStudy === '5') {
    alert('That is correct! yearStudy is 5 ');
    count++;

    break;
  }
}


//question 7

let animalType = ['cat', 'bird', 'parrot'];
let correct = false;
for (let o = 0; o < 7; o++) {
  let animals = prompt('What my favourite in animals ?!').toLowerCase();
  for (let j = 0; j < animalType.length; j++) {
    let arr = animalType[j];

    if (animals === arr) {
      alert('That is correct !');
      correct = true;
      count++;
      break;
    }

  }
  if (correct === true) {
    break;
  } else {
    alert('That is Notcorrect ! you have 6 attempts');

  }
}
alert('My favourite animals :' + animalType);
alert(' The Result of correct answers is ' + count + ' /7');

alert('Welcome ' + fName);



