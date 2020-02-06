import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import list from '../../seeds/projects.json'

const Projects: FC = () => {
	const { projects } = list.data

	return (
		<div>
			{projects.map(val => {
				return (
					<Link
						to={`/projects/${val.id}`}
						style={{ textDecoration: 'none', color: 'black' }}
					>
						<h1>{val.title}</h1>
						<ul>
							{val.services.map(service => {
								return <li>{service}</li>
							})}
						</ul>
						<hr />
					</Link>
				)
			})}
		</div>
	)
}

export default Projects
