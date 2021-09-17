// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const response = await fetch(API_URL, myObject)
  const data = await response.json()
  const { joke } = data
  appendJoke(joke)
};

const appendJoke = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer')
  jokeContainer.innerHTML = joke
}


window.onload = () => fetchJoke();