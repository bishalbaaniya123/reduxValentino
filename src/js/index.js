import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;
store.getState();
store.subscribe(() => console.log('Look ma, Redux!!'));