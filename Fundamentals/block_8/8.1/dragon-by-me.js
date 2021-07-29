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

const dmgDragon = () => Math.round(Math.random() * (dragon.strength - 15 + 1) + 15);

const dmgWarrior = () => {
  return Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) + warrior.strength);
}

const dmgDeal = () => {
  return Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence);
}

const manaFunction = () => {
  if (mage.mana < 15) {
    mage.mana - 0;
    return 'Não possui mana suficiente';
  } else {
    return mage.mana - 15;
  }
}

const dmgMage = () => {
  mageStat = {
    dmg: dmgDeal(),
    mana: manaFunction(),
  }
  return mageStat;
}

const gameActions = {
  warriorTurn: () => {
    const valor = dmgWarrior ();
    warrior.damage = 0;
    let vidaDragao = dragon.healthPoints - valor;
    let attDmgWarrior = warrior.damage + valor;
    return attStatsWarriorAndDragon = {
      lifeDragon: vidaDragao,
      dgmDealtWarrior: attDmgWarrior
    }
  },
  mageTurn: () => {
    const valorMage = dmgDeal ();
    mage.damage = 0;
    let vidaDragaoByMage = dragon.healthPoints - valorMage;
    let attDmgMage = mage.damage + valorMage;
    return attStatusMageAndDragon = {
      lifeDragon: vidaDragaoByMage,
      dmgDealtMage: attDmgMage
    }
  },
  dragonTurn: () => {
    const valorDragon = dmgDragon ();
    dragon.damage = 0;
    let attLifeWarrior = warrior.healthPoints - valorDragon;
    let attLifeMage = mage.healthPoints - valorDragon;
    let attDmgDragon = dragon.damage + valorDragon;
    return attStatusDragon = {
      dragonDmg: attDmgDragon,
      newLifeWarrior: attLifeWarrior,
      newLifeMage: attLifeMage
    }
  }
};

console.log(gameActions.warriorTurn());
console.log(gameActions.mageTurn());
console.log(gameActions.dragonTurn());