import React, { FC, useState, useEffect } from 'react'
import { makeStyles, Theme, Typography, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
	},
}))

const Section: FC = (props: any) => {
	//	console.log(props)

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
					{tab === '/offers' && <p>offers</p>}
					{tab === '/projects' && <p>projects</p>}
					{tab === '/contacts' && <p>contacts</p>}
				</Typography>
			</Paper>
		</div>
	)
}

export default Section
