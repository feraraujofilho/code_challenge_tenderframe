import React, { FC } from 'react'
import { Route, Link } from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { themeValues } from 'app/themes/themeValues'

const useStyles = makeStyles(() => ({
	tabs: {
		color: themeValues().palette.blue.main,
		backgroundColor: 'white',
		marginTop: '101px',
		'&:hover': {
			backgroundColor: 'white',
		},
		borderRadius: '10px 10px 0 0',
	},
}))

const AntiTabs = withStyles({
	indicator: {
		backgroundColor: themeValues().palette.blue.main,
	},
})(Tabs)

//	get all tabs and display content accordingly

const TabsWrappedLabel: FC = () => {
	const classes = useStyles()
	const allTabs = {
		pages: [
			{ label: 'Home', value: '/', page: '/' },
			{ label: 'Projects', value: '/projects', page: '/projects' },
			{ label: 'Offers', value: '/offers', page: '/offers' },
			{ label: 'Contacts', value: '/contacts', page: '/contacts' },
		],
	}

	return (
		<div>
			<AppBar position="static">
				<Route
					render={({ location }) => (
						<>
							<AntiTabs value={location.pathname}>
								{allTabs.pages.map(each => {
									return (
										<Tab
											className={classes.tabs}
											key={each}
											label={each.label}
											value={each.value}
											component={Link}
											to={each.value}
											textColor="primary"
										/>
									)
								})}
							</AntiTabs>
						</>
					)}
				/>
			</AppBar>
		</div>
	)
}

export default TabsWrappedLabel
