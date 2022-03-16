import React from 'react';
import { myProjects } from '../../myProjects';

function Project(props) {
   console.log(myProjects)

    return (
        <section>
            <h2>My Projects</h2>

            <div>
                {myProjects?.map((project) => {
                    console.log(project)
                    return (
                        <p>{project.name}</p>
                    )
                })}
            </div>
        </section>
    )
}

export default Project;