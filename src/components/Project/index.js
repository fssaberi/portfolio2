import React from 'react';
import { myProjects } from '../../myProjects';

function Project(props) {
   
    return (
        <section>
            <h2>My Projects</h2>

            <div>
                {myProjects.map(props)}
            </div>
        </section>
    )
}

export default Project;