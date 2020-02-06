import React, { FC, useState, useEffect } from 'react'
import { makeStyles, Theme, Typography, Paper } from '@material-ui/core'
import Offers from './Offers'
import Projects from './Projects'
import Contacts from './Contacts'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
	},
}))

const Section: FC = (props: any) => {
	console.log(props)

	const classes = useStyles()
	const { root } = classes

	const [tab, setTab] = useState('none')

	const { pathname } = props.location

	useEffect(() => {
		setTab(pathname)
	}, [pathname, tab])

	return (
		<div className={root}>
			<Paper className={root}>
				<Typography component="div">
					{tab === '/offers' && <Offers />}
					{tab === '/projects' && <Projects />}
					{tab === '/contacts' && <Contacts/>}
				</Typography>
			</Paper>
		</div>
	)
}

export default Section
