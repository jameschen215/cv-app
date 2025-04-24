import { useReducer } from 'react';

import { dataReducer } from './data-reducer';
import { DataContext, DataDispatchContext } from './data-context';

export function DataProvider({ children }) {
	const [data, dispatch] = useReducer(dataReducer, {});

	return (
		<DataContext.Provider value={data}>
			<DataDispatchContext.Provider value={dispatch}>
				{children}
			</DataDispatchContext.Provider>
		</DataContext.Provider>
	);
}
