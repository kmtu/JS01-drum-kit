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
import styles from './drumkits.css';

let drumData = [
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


let drumkits = document.createElement('div');
drumkits.classList.add(styles.drumkits);
for (let drumkit of drumData) {
  drumkits.appendChild(drum(drumkit.label, drumkit.src));
}

export default drumkits;
