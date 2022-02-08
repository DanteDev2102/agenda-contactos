const TableContacts = ({ contacts = [], dispatch }) => {
	const handleDelete = (id) => {
		const deleteAction = {
			type: 'delete',
			payload: id
		};

		dispatch(deleteAction);
	};

	return (
		<table className="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Number</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{contacts.map(({ id, name, number }) => {
					const finalID = id.split('-')[0];
					return (
						<tr key={id}>
							<th>{finalID}</th>
							<td>{name}</td>
							<td>{number}</td>
							<td>
								<button
									onClick={() => handleDelete(id)}
									className="btn btn-danger"
								>
									delete
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default TableContacts;
