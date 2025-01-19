import { createContext } from 'react';
import store from '@store';

const storeContext = createContext(store);

export default storeContext;
