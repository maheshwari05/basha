import * as Actions from '../Actions';

const initialState = {
	selected:null,
	result:false,
	clicked:null,
};

const dialog = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SELECTED: {
			return {
				...state,
				selected:action.payload
			};
		}
		case Actions.CLICKED:{
			return {
				...state,
				clicked:action.payload
			}
		}
		case Actions.GET_RESULT:{
			return {
				...state,
				result:action.payload
			}
		}
		case Actions.RESET:{
			return {
				...state,
				clicked:null
			}
		}
		default: {
			return state;
		}
	}
};

export default dialog;