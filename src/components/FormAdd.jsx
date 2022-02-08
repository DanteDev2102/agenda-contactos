import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const FormAdd = ({ dispatch }) => {
	const [data, setData] = useState({ name: '', number: '' });
	const { name, number } = data;

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const actionAdd = {
		type: 'add',
		payload: {
			id: uuid(),
			name,
			number
		}
	};

	const handleAdd = (e) => {
		e.preventDefault();
		dispatch(actionAdd);
		setData({ name: '', number: '' });
	};

	return (
		<>
			<form className="container">
				<label className="mx-1 d-grid gap-2">
					Name:{' '}
					<input
						onChange={handleChange}
						name="name"
						value={name}
						type="text"
						className="form-control"
						autoComplete="off"
					/>
				</label>
				<label className="mx-1 d-grid gap-2">
					Number:{' '}
					<input
						onChange={handleChange}
						name="number"
						value={number}
						type="tel"
						className="form-control"
						autoComplete="off"
					/>
				</label>
				<div className="mx-1 d-grid gap-">
					<button
						onClick={handleAdd}
						className="btn btn-info mt-2"
					>
						Adding
					</button>
				</div>
			</form>
		</>
	);
};

export default FormAdd;
