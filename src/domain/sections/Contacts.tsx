import React, { FC } from 'react'
import contacts from '../../seeds/contacts.json'

const Contacts: FC = () => {
	return (
		<table style={{ width: '100%', textAlign: 'center' }}>
			<tr>
				<th>Company</th>
				<th>Email</th>
				<th>Phone</th>
			</tr>
			{contacts.data.contacts.map(contact => {
				const { company, email, phone } = contact
				return (
					<tr style={{ border: '1px solid black' }}>
						<td>{company}</td>
						<td>{email}</td>
						<td>{phone}</td>
					</tr>
				)
			})}
		</table>
	)
}

export default Contacts
