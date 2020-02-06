import React, { FC, Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
/* import { makeStyles } from '@material-ui/styles' */
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

/* const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'blue',
	},
	tabs: {
		marginTop: "101px"
	}
}))  */

//	get all tabs and display content accordingly

const TabsWrappedLabel: FC = () => {
	/* const classes = useStyles() */
	const allTabs = {
		pages: [
			{ label: 'Projects', value: '/projects', page: '/projects' },
			{ label: 'Offers', value: '/offers', page: '/offers' },
			{ label: 'Contacts', value: '/contacts', page: '/contacts' },
		],
	}


	return (
		<div>
			<AppBar position="static">
				<Route
					path="/"
					render={({ location }) => (
						<Fragment>
							<Tabs value={location.pathname}>
								{allTabs.pages.map(each => {
									return <Tab
										label={each.label}
										value={each.value}
										component={Link}
										to={each.value}
									/>
								})}
							</Tabs>
						</Fragment>
					)}
				/>
			</AppBar>
		</div>
	)
}

export default TabsWrappedLabel
