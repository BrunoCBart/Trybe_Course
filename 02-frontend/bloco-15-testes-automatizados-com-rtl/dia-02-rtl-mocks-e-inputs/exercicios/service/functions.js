const rand = (min, max) => Math.round(Math.random() * (max - min) - min) 

const convertUpper = (str) => str.toUpperCase()

const firstLetter = (str) => str[0]

const concatStr = ((str, str2) => str + str2)

const dogPictures = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(dog => dog)
}

module.exports  = { rand, convertUpper, firstLetter, concatStr, dogPictures}

