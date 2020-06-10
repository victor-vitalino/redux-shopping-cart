import { createStore } from 'redux';
// reducers combinados
import RootReducer from './modules/rootReducer';



// criando a store
const store = createStore(RootReducer);

export default store;