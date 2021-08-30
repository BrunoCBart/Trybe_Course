const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for (let [país, capital] of Object.entries(países)) {
  console.log('país: ' + país + ' capital: ' + capital)
}