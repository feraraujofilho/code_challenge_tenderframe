import React, { FC } from 'react'
import { makeStyles, Theme, Typography, Paper } from '@material-ui/core'
import { Route } from 'react-router-dom'
import Offers from './Offers'
import Projects from './Projects'
import Contacts from './Contacts'
import ProjectDetails from './ProjectDetails'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
	},
}))

const Section: FC = () => {
	const classes = useStyles()
	const { root } = classes

	return (
		<div className={root}>
			<Paper className={root}>
				<Typography component="div">
					<Route
						exact
						path="/"
						render={() => {
							return <h1>WELCOME TO YOUR DASHBOARD</h1>
						}}
					/>
					<Route
						path="/projects/:id"
						render={elementProps => {
							return <ProjectDetails {...elementProps} />
						}}
					/>
					<Route exact path="/offers" component={Offers} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/contacts" component={Contacts} />
				</Typography>
			</Paper>
		</div>
	)
}

export default Section
