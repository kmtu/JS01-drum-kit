import boom from './sounds/boom.wav';
import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tink from './sounds/tink.wav';
import tom from './sounds/tom.wav';
import drum from './drum.js';
import './style.css';

let drumkits = [
  {label: 'Boom!', src: boom},
  {label: 'Clap!', src: clap},
  {label: 'Hihat!', src: hihat},
  {label: 'Kick!', src: kick},
  {label: 'Openhat!', src: openhat},
  {label: 'Ride!', src: ride},
  {label: 'Snare!', src: snare},
  {label: 'Tink!', src: tink},
  {label: 'Tom!', src: tom}
];

let container = document.createElement('div');
let drumWrapper = document.createElement('div');
container.classList.add('container');
drumWrapper.classList.add('drum-wrapper');
for (let drumkit of drumkits) {
  drumWrapper.appendChild(drum(drumkit.label, drumkit.src));
}
container.appendChild(drumWrapper);
document.body.appendChild(container);

