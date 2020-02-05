import React, { FC } from 'react'

import { makeStyles, AppBar } from '@material-ui/core'

import { themeValues } from 'app/themes/themeValues'

import Tabs from '../tabs/Tabs'

const useStyles = makeStyles({
	root: {
		height: themeValues().sizes.TabHeader.height,
		background: themeValues().gradients.background,
		position: 'relative',
		color: 'white',
	},
})

const Header: FC = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Tabs />
			<AppBar position="static" />
		</div>
	)
}

export default Header
