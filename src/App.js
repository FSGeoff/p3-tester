import React, { useState, useEffect } from "react";
import teacherDirectory from "./teacherDirectory.json";
import Directory from "./Components/Directory/Directory.jsx";

function App() {
	const [teachers, setTeachers] = useState({});

	useEffect(() => {
		setTeachers(teachers);
	}, [teachers]);

	return (
		<div className="App">
			{teacherDirectory.map((teacher) => (
				<Directory
					key={teacher.id}
					image={teacher.image}
					name={teacher.name}
					education={teacher.education}
					experience={teacher.experience}
					subjects={teacher.subjects[0]}
				/>
			))}
		</div>
	);
}

export default App;
