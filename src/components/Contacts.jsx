import { useState, useReducer, useEffect } from 'react';
import TableContacts from './TableContacts';
import FormAdd from './FormAdd';
import { ContactsReducer } from '../reducers/ContacsReducer';

const init = () => {
	const contacts = localStorage.getItem('contacts');
	return contacts ? JSON.parse(contacts) : [];
};

const Contacts = () => {
	const [state, dispatch] = useReducer(ContactsReducer, [], init);
	const [formView, setFormView] = useState(false);

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(state));
	}, [state]);

	return (
		<div className="container mt-3">
			<button
				onClick={() => setFormView(!formView)}
				className={
					!formView ? 'btn btn-info' : 'btn btn-danger'
				}
			>
				{!formView ? 'open' : 'close'}
			</button>
			{formView && <FormAdd dispatch={dispatch} />}
			<TableContacts contacts={state} dispatch={dispatch} />
		</div>
	);
};

export default Contacts;
