import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import coloredLogo from "../../img/logoColored.png"

export interface LogoProps {
	invert?: boolean
	marginTop?: number
	marginBottom?: number
}

const useStyles = makeStyles(() => ({
	logo: {
		width: '80%',
		padding: '20px',
		margin: '20px',
	},
}))

const Logo: FC<LogoProps> = () => {
	const classes = useStyles()

	return (
		<Link to="/">
			<img src={coloredLogo} className={classes.logo} alt="Logo" />
		</Link>
	)
}

export default Logo
