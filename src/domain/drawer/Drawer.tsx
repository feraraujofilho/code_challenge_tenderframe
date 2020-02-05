import React, { FC } from 'react'
import MuiDrawer, {
	DrawerProps as MuiDrawerProps,
} from '@material-ui/core/Drawer'
import Logo from './Logo'
import InfoPaper from './InfoPaper'

export type DrawerProps = MuiDrawerProps

const Drawer: FC<DrawerProps> = props => {
	return (
		<MuiDrawer variant="permanent" {...props}>
			<Logo />
			<InfoPaper />
		</MuiDrawer>
	)
}

export default Drawer
