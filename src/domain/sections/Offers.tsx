import React, { FC } from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import list from '../../seeds/projects.json'

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},

	project: {
		margin: '20px',
	},

	box: {
		margin: '10px 0',
		padding: '10px',
		listStyle: 'none',
		width: '100%',
	},
}))

const Offers: FC = () => {
	const classes = useStyles()
	const offers = list.data.projects.map(value => {
		const filtered = { title: value.title, offers: value.offers }

		return filtered
	})

	return (
		<div>
			<h1>All Offers</h1>
			<div className={classes.container}>
				{offers.map(val => {
					return (
						<div className={classes.project} key={val.title}>
							<h2>
								<span>Project: </span>
								{val.title}
							</h2>
							<div>
								{val.offers.map(singleOffer => {
									return (
										<Paper
											className={classes.box}
											elevation={3}
											key={singleOffer.company}
										>
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
										</Paper>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Offers
