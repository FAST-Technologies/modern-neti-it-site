import React from 'react';
import cl from "./ProgressProjects.module.css"
import {myComp} from "../../OurProjects.tsx";

const ProgressProjects: React.FC<myComp> = ({ props}) => {
    return (
        <div className={cl.endedproject_block}>
            <div className={cl.projectinfo}>
                <img
                    className={cl.projectImage}
                    src={props.img}
                    alt={props.title}
                />
                <div className={cl.project_information}>
                    <h3 className={cl.project_title}>
                        {props.title}
                    </h3>
                    <p className={cl.project_result}>
                        {props.result}
                    </p>
                    <p className={cl.project_tasks}>
                        {props.tasks}
                    </p>
                    <p className={cl.project_phase}>
                        <a href="">Мы набираем команду!</a>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ProgressProjects;