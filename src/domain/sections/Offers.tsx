import React, { FC } from 'react'
import list from '../../seeds/projects.json'

const Offers: FC = () => {
	const offers = list.data.projects.map(value => {
		const filtered = { title: value.title, offers: value.offers }

		return filtered
	})

	return (
		<div>
			{offers.map(val => {
				return (
					<div>
						<h1>{val.title}</h1>
						<div>
							{val.offers.map(singleOffer => {
								return (
									<ul style={{ border: '1px solid blue' }}>
										<li>
											<span>Company: </span>
											{singleOffer.company}
										</li>
										<li>
											<span>Service: </span>
											{singleOffer.service}
										</li>
										<li>
											<span>Price: </span>
											{singleOffer.price} €
										</li>
									</ul>
								)
							})}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Offers
