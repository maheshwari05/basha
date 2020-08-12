import * as Actions from '../Actions';

const initialState = {
	data:[
		'ALL IS WELL',
		'ALL IS WELL',
		'WINTER IS COMING',
		'EVERYTHING IS FINE'
	]
};

const sentences = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_ALL_SENTENCE: {
			return {
				...state,
				data:action.payload,
			};
		}
		default: {
			return state;
		}
	}
};

export default sentences;