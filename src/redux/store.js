import rootReducers from "./handleCart";
import {createStore} from "redux";

const store=createStore(rootReducers);

export default store;