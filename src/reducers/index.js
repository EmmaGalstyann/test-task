export const initialState = {
	isLoggedIn: false,
};

export function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOG_IN':
			return { ...state, isLoggedIn: action.payload };
		default:
			return state;
	}
}
