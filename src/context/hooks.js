import { useContext } from 'react';

import { DataContext, DataDispatchContext } from './data-context';

export function useData() {
	return useContext(DataContext);
}

export function useDispatch() {
	return useContext(DataDispatchContext);
}
