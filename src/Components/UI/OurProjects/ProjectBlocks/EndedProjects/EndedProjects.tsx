// @ts-ignore
import React from 'react';
import cl from "./EndedProjects.module.css"
import {myComp} from "../../OurProjects.tsx";

const EndedProjects: React.FC<myComp> = ({ props}) => {
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
                        <a href="">Ссылка на проект</a>
                    </p>
                </div>
            </div>
            <div className={cl.teaminfo}>
                <h2 className={cl.teaminfo_title}>Команда проекта</h2>
                <div className={cl.itemBlock}>
                    <div className={cl.team_item}>
                        <img className={cl.imge} src={props.img1} alt={props.name}/>
                        <p className={cl.name}>
                            {props.name}
                        </p>
                        <p className={cl.job}>
                            {props.job}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EndedProjects;