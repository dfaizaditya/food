import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/root.css';
import '../styles/responsive.css';
import './main.js';

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
