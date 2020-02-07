import React, { FC } from 'react'
import contacts from '../../seeds/contacts.json'

const Contacts: FC = () => {
	return (
		<table style={{ width: '100%', textAlign: 'center' }}>
			<tbody>
				<tr>
					<th>Company</th>
					<th>Email</th>
					<th>Phone</th>
				</tr>
				{contacts.data.contacts.map(contact => {
					const { company, email, phone, id } = contact
					return (
						<tr style={{ border: '1px solid black' }} key={id}>
							<td>{company}</td>
							<td>{email}</td>
							<td>{phone}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default Contacts
