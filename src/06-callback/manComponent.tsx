import React, {useState} from 'react';
import {ManType} from "./manComponent.test";

type PropsType = {
    title: string
    man: ManType
}

const ManComponent = ({title, man, ...props}) => {

    const [message, setMessage] = useState<string>("hello")

    // const {title, man : {name}} = props

    return (
        <div>
            <h4>{title}</h4>
            <hr/>
            <div>{man.name}</div>
        </div>
    );
};

export default ManComponent;