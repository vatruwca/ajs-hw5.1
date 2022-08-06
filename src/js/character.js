export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.nameVerification();
    this.type = type;
    this.typeVerification();
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  nameVerification() {
    if ((this.name.length < 2) || (this.name.length > 10)) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }
  }

  typeVerification() {
    const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!arr.includes(this.type)) {
      throw new Error('Тип должен соответствовать одному из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
  }
}
