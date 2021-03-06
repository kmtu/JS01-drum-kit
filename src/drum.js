import styles from './drum.css';

export default function drum(name, src) {
  let element = document.createElement('div');
  let sound = document.createElement('audio');

  element.classList.add(styles.drum);
  element.textContent = name;
  
  sound.src = src;

  element.appendChild(sound);
  element.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
  });
  return element;
};

