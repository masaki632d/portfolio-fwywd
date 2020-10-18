import { createStore } from "redux";
import Reducer from "../ducks/NewNote/reducers";

export const store = createStore(Reducer);
