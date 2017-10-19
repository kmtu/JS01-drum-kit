import drumkits from './drumkits.js';
import styles from './style.css';

let container = document.createElement('div');
container.classList.add(styles.container);
container.appendChild(drumkits);
document.body.appendChild(container);

