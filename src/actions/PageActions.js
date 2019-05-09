export function logIn(isLoggedIn) {
	return {
		type: 'LOG_IN',
		payload: isLoggedIn,
	};
}
