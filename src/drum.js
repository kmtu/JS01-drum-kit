export default function (name) {
  let element = document.createElement('div');
  element.classList.add('drum');
  element.textContent = name;
  return element;
};

