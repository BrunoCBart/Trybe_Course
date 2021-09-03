

const makePerson = (nomeCompleto) => ({ nomeCompleto, email: `${nomeCompleto.replace(' ', '_')}@trybe.com` })


const newEmployees = () => {
  const employees = {
    id1: makePerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: makePerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: makePerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees())