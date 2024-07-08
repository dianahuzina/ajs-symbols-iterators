import Character from './character';
import Team from './team';

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};

const char2 = {
  name: 'Маг',
  type: 'Magician',
  health: 100,
  level: 10,
  attack: 40,
  defence: 10
};

const bowman = new Character(char1);
const magician = new Character(char2);
const teamChar = new Team([bowman, magician]);

for (let item of teamChar) {
  console.log(item);
}