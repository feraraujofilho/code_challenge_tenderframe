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
	/* const classes = useStyles()
	const allTabs = ['/projects', '/offers', '/contacts'] */

	/* console.log('PROPS', props) */

	return (
		<div>
			<AppBar position="static">
				<Route
					path="/"
					render={({ location }) => (
						<Fragment>
							<Tabs value={location.pathname}>
								<Tab
									label="Projects"
									value="/projects"
									component={Link}
									to="/projects"
								/>
								<Tab
									label="Offers"
									value="/offers"
									component={Link}
									to="/offers"
								/>
								<Tab
									value="/contacts"
									label="Contacts"
									component={Link}
									to="/contacts"
								/>
							</Tabs>
						</Fragment>
					)}
				/>
			</AppBar>
		</div>
	)
}

export default TabsWrappedLabel
