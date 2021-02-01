import React from "react";

const Directory = (teachers) => {
	return (
		<>
			<div className="card">
				<div className="card-image">
					<figure className="image is-96x96">
						<img src={teachers.image} alt={teachers.name} />
					</figure>
				</div>

				<div className="card">
					<div className="card-content">
						<div className="content">
							<strong>Name:</strong>
							{teachers.name}
							<br />
							<strong>Education:</strong>
							{teachers.education}
							<br />
							<strong>Experience:</strong>
							{teachers.experience}
							<br />
							<strong>Subject(s):</strong>
							{teachers.subject}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Directory;
