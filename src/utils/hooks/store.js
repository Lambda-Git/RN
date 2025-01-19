import { useContext } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import StoreContext from './storeContext';

function useStore () {
    const store = useContext(StoreContext);
    return store;
};

export {
    toJS,
    observer,
    useStore,
};
