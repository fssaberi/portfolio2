import React from 'react';
import { myProjects } from '../../myProjects';

function Project() {
    return (
        <section>
            <h2>My Projects</h2>

            <div>
                {myProjects.map}
            </div>
        </section>
    )
}

export default Project;