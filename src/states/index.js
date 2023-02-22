import {create} from 'zustand';
import inventoryState from './inventory/inventoryState';

const useStore = create((set, get) => ({
    ...inventoryState(set, get),
}));

export default useStore;
