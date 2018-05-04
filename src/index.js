console.log(`I'm a silly entry point`);
console.log(store.getState());
store.subscribe(() => console.log('Look ma, Redux!!'));
store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) )

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

import App from "./App";
import style from "./main.css";
import index from "./js/index";
