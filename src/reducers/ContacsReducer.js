export const ContactsReducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'add':
			return [...state, payload];
		case 'delete':
			return state.filter((current) => current.id !== payload);
		default:
			return state;
	}
};
