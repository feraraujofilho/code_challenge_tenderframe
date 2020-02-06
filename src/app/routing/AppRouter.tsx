import React, { ReactElement } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import TemplateWelcome from '../../template/TemplateWelcome'
import Section from 'domain/sections/Section'

const AppRouter = (): ReactElement => {
	return (
		<BrowserRouter>
			<Route path="/" component={TemplateWelcome} />
			{/* <Route
				path="/projects/:id"
				render={props => <Section />}
			/> */}
		</BrowserRouter>
	)
}

export default AppRouter
