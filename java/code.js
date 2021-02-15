'use strict';



let fName= prompt('what is your name');
alert('Welcome ' +fName );

let uniSpecialization= prompt('Did you know i studied computer engineer? ','yes/y or no/n').toLocaleLowerCase();
//console.log(uniSpecialization);

if(uniSpecialization !== 'yes' && uniSpecialization !=='y' && uniSpecialization !== 'no' && uniSpecialization !== 'n')
{uniSpecialization=prompt('Did you know i studied computer engineer? please answer yes or no  ','yes/y or no/n').toLocaleLowerCase();
}

if(uniSpecialization ==='yes' || uniSpecialization==='y')
{ alert('Im here if you want anythings in computer ');

}else if (uniSpecialization ==='no' || uniSpecialization ==='n')
{alert('Okay! at the moment you are know !');

} 

// second question

let myAge= prompt('Did you know my age? ','yes/y or no/n').toLocaleLowerCase();
//console.log(myAge);

if( myAge !== 'yes' && myAge !=='y' && myAge !== 'no' && myAge !== 'n')
{myAge=prompt('Did you know my age ? please answer yes or no  ','yes/y or no/n').toLocaleLowerCase();
}

if(myAge ==='yes' || myAge==='y')
{alert('Hope to me long life');

}else if (myAge ==='no' || myAge ==='n')
{alert('Okay! my age is 24 !');

}

// third question

let colorLove= prompt('Did you know my lovely color ? ','yes/y or no/n').toLocaleLowerCase();
//console.log(colorLove);

if( colorLove !== 'yes' && colorLove !=='y' && colorLove !== 'no' && colorLove !== 'n')
{colorLove=prompt('Did you know my lovely color ? please answer yes or no  ','yes/y or no/n').toLocaleLowerCase();
}

if(colorLove ==='yes' || colorLove==='y')
{alert('Great! what about you ?');

}else if (colorLove ==='no' || colorLove ==='n')
{alert('Okay! my lovely color is gray!');

}

// question four

let favDrink= prompt('Did you know my favourite drink ? ','yes/y or no/n').toLocaleLowerCase();
//console.log(favDrink);

if( favDrink !== 'yes' && favDrink !=='y' && favDrink !== 'no' && favDrink !== 'n')
{favDrink=prompt('Did you know my favourite drink ? please answer yes or no  ','yes/y or no/n').toLocaleLowerCase();
}

if(favDrink ==='yes' || favDrink==='y')
{alert('Okay then give me some of it');

}else if (favDrink ==='no' || favDrink ==='n')
{alert('My favourite drink is Coffee!');

}

// question five

let loveflower= prompt('Did you know if i love flowers? ','yes/y or no/n').toLocaleLowerCase();
//console.log(loveflower);

if( loveflower !== 'yes' && loveflower !=='y' && loveflower !== 'no' && loveflower !== 'n')
{loveflower=prompt('Did you know if i love flowers ? please answer yes or no  ','yes/y or no/n').toLocaleLowerCase();
}

if(loveflower ==='yes' || loveflower==='y')
{alert('You are flower!');

}else if (loveflower ==='no' || loveflower ==='n')
{alert('Okay! i love flower so much espicially pink flower');

}

alert('Welcome ' +fName );





