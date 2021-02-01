import React from "react";

const Directory = (teachers) => {
	return (
		<>
			<div
                className="card "
                // TODO:cards need to stack horizontally, currently vertical
				style={{
                    margin:"10px",
					border: "5px",
					padding: "5px",
					width: "30%",
					outline: "solid 1px black",
					display: "inline-block",
					flexDirection: "row",
				}}
			>
				<div className="card-image">
					<figure className="image is-128x128">
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
							{teachers.subjects}
							<br />
							<br />
							<button className="button is-small is-fullwidth is-info">
                                {/* TODO: add onclick to prompt teacher schedule */}
								Book Session
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Directory;
