function Obj(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Obj.prototype.display = function () {
  return console.log('I am protype, autobots roll out')
}

const obj1 = new Obj('Bruno', 'Bartolomeu')

for (let key in obj1) {
  console.log(key)
}
console.log(Object.keys(obj1))