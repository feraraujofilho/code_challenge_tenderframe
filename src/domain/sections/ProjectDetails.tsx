import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { FaPen, FaCheck } from 'react-icons/fa'
import list from '../../seeds/projects.json'

const ProjectDetails: FC<RouteComponentProps> = (props: any) => {
	const allStatus = ['Draft', 'Open', 'Ongoing', 'Closed']
	const [project, setProject] = React.useState()
	const [status, setStatus] = React.useState('')
	const [showForm, setShowForm] = React.useState(false)

	const handleClick = () => {
		setShowForm(!showForm)
	}

	useEffect(() => {
		function getProject() {
			const projectSource = list.data.projects.find(
				single => single.id === props.match.params.id
			)
			setProject(projectSource)
		}
		getProject()
		if (project) {
			setStatus(project.status)
		}
	
	}, [project, props.match.params])

	const handleChange = (event: any) => {
		/* 
		const editUserProfile = (_id, userInfos) => {
  		return axios
    		.put(`/api/projects/${_id}`, projectInfos)
    		.then(response => {
			setProject(response.data.project)
    	})
			.catch(err => {
			if (err.response.status === 404) {
				setError({
				error: err.response.data.message
				});
			}
			});
		}; */

		setStatus(event.target.value)
		return false
	}

	return (
		<div>
			{project && (
				<div>
					<h1>
						<span>Project: </span>
						{project.title}
					</h1>
					<h3>
						<span>Status: </span>
						{showForm ? (
							<>
								<select
									name="status"
									onChange={handleChange}
									defaultValue={status}
								>
									{allStatus.map(singleStatus => {
										return (
											<option
												value={singleStatus}
												key={singleStatus}
											>
												{singleStatus}
											</option>
										)
									})}
								</select>
								<button type="submit" onClick={handleClick}>
									<FaCheck />
								</button>
							</>
						) : (
							<>
								<span>{status}</span>
								<button onClick={handleClick} type="submit">
									<FaPen />
								</button>
							</>
						)}
					</h3>

					<ul>
						<p>
							<strong>Services required:</strong>{' '}
						</p>
						{project.services.map((service: any) => {
							return <li key={service}>{service}</li>
						})}
					</ul>
					<div>
						<ul>
							<p>
								<strong>Offers received:</strong>{' '}
							</p>
							{project.offers.map((offer: any) => {
								return (
									<ul key={offer.company}>
										<li>
											<span>Company: </span>
											{offer.company}
										</li>
										<li>
											<span>Service: </span>
											{offer.service}
										</li>
										<li>
											<span>Price: </span>
											{offer.price} €
										</li>
										<hr />
									</ul>
								)
							})}
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProjectDetails
