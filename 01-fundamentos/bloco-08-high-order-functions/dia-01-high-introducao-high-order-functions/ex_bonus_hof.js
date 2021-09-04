const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15)

const warriorAttack = () => Math.floor(Math.random() * (warrior.strength - 2 + 1) + 2)

const mageAttack = () => ({
  damage: function () {
    if (this.mana < 15) {
      console.log('Not enough mana ...')
      return
    }
    this.mana = this.mana - 15;
    const dmg = Math.floor(Math.random() * ((mage.intelligence * 2) - 45 + 1) + 45);
    console.log(dmg)
    return dmg
  },
  mana: mage.mana
})

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack()
    warrior.damage = warriorDamage
    dragon.healthPoints -= warriorDamage
  },

  mageTurn: (mageAttack) => {
    const mageStats = mageAttack()
    const mageDamage = mageStats.damage()
    const mana = mageStats.mana;
    mage.damage = mageDamage
    mage.mana = mana;
    dragon.healthPoints -= mageDamage
  },

  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack()
    warrior.healthPoints -= dragonDamage
    mage.healthPoints -= dragonDamage
    dragon.damage = dragonDamage
  }
}

gameActions.warriorTurn(warriorAttack)
gameActions.mageTurn(mageAttack)
gameActions.dragonTurn(dragonAttack)

console.log(warrior)
console.log(mage)
console.log(dragon)
