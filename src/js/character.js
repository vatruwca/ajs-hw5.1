export default class Character {
  constructor(name, type) {
    this.nameVerification(name);
    this.typeVerification(type);
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  nameVerification(name) {
    if ((name.length < 2) || (name.length > 10)) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    } else {
      this.name = name;
    }
  }

  typeVerification(type) {
    const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!arr.includes(type)) {
      throw new Error(`Тип должен соответствовать одному из: ${arr.join(', ')}`);
    } else {
      this.type = type;
    }
  }
}
