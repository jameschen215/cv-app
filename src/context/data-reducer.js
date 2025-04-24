export function dataReducer(data, action) {
	switch (action.type) {
		case 'add': {
			const prevSubData = data[action.title];

			if (Array.isArray(prevSubData)) {
				// Append to existing array
				return {
					...data,
					[action.title]: [...prevSubData, action.formData],
				};
			}

			if (!action.title.startsWith('Personal')) {
				// Initialize as array with first item
				return {
					...data,
					[action.title]: [action.formData],
				};
			}

			// Default: replace or set as a single value
			return {
				...data,
				[action.title]: action.formData,
			};
		}
		case 'edit': {
			const prevSubData = data[action.title];

			if (Array.isArray(prevSubData)) {
				// Array: update the data who's id equals to formData's id
				const updatedSubData = prevSubData.map((data) =>
					data.id === action.formData.id ? action.formData : data
				);

				return {
					...data,
					[action.title]: updatedSubData,
				};
			}

			// Default: replace the data under specific title
			return {
				...data,
				[action.title]: action.formData,
			};
		}
		case 'delete': {
			const prevSubData = data[action.title];

			if (!Array.isArray(prevSubData)) break;

			const updatedSubData = prevSubData.filter(
				(data) => data.id !== action.id
			);

			return {
				...data,
				[action.title]: updatedSubData,
			};
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}
