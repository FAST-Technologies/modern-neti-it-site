// @ts-ignore
import React from 'react';
import cl from "./PersonCard.module.css";
import {person} from "./AboutUs.tsx";

const PersonCard : React.FC<person> = ({ name, job, description, img}) => {
    return (
        <div className={cl.personObject}>
            <img
                className={cl.personImage}
                src={img}
                alt={name}
            />
            <div className={cl.personText}>
                <div className={cl.personName}>
                    {name}
                </div>
                <div className={cl.personJob}>
                    {job}
                </div>
                <div className={cl.personDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default PersonCard;