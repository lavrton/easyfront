// include styles into bundle.js
// so you don't need it to add them in index.html
import './styles.css';

// import some modules from other files
import {getTwo} from './scripts/utils';

// write your application
const container = document.getElementById('container');
container.innerHTML = 'Hello my web project';
console.log(getTwo());
