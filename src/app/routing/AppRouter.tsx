import React, { ReactElement } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import TemplateWelcome from '../../template/TemplateWelcome'

const AppRouter = (): ReactElement => {
	return (
		<BrowserRouter>
			<Route path="/" component={TemplateWelcome} />
		</BrowserRouter>
	)
}

export default AppRouter
