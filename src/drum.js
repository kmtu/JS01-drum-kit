export default function drum(name, src) {
  let element = document.createElement('div');
  let sound = document.createElement('audio');

  element.classList.add('drum');
  element.textContent = name;
  
  sound.src = src;

  element.appendChild(sound);
  element.addEventListener('click', () => sound.play());
  return element;
};

