import Team from './Team.js';
import Settings from './Settings.js';

const team1 = new Team();
team1.add('pers3');
team1.add('pers1');
// team1.add('pers1') // Error
team1.addAll('pers2', 'pers3', 'pers4');
console.log(team1.members);

const settings1 = new Settings();
console.log(settings1.settings);