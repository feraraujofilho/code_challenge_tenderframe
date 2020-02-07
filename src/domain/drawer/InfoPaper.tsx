import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { themeValues } from 'app/themes/themeValues'

export interface InfoPaperProps {
	margin?: number
	padding?: number
	textAlign?: string
}

const useStyles = makeStyles(theme => ({
	root: {
		margin: theme.spacing(3.7),
		width: theme.spacing(30),
		height: theme.spacing(48),
		background: themeValues().palette.blue.main,
		color: themeValues().palette.gray.main,
	},
	infoPaper: {
		padding: '3px',
		margin: '20px',
		textAlign: 'center',
	},
}))

// Info Box displaing information in the sidebar

const InfoPaper: FC<InfoPaperProps> = () => {
	const classes = useStyles()

	return (
		<Paper className={classes.root}>
			<Typography className={classes.infoPaper}>
				This is your personal dashboard where you can find more
				information about all the projects you are working on.
				<br />
				<br />
				To see all the projects, go to the tab "Projects"
				<br />
				<br />
				For all the offers received, go to "Offers"
				<br />
				<br />
				To check your contacts list, go to "Contacts"
			</Typography>
		</Paper>
	)
}

export default InfoPaper
