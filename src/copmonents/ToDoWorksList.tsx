import React from "react";
import { IWorksList } from "../Interfaces";
interface Props {
    worksElement: IWorksList;
}

const ToDoWorksList = ({worksElement}: Props) => {
    return (
        <div className="worksElement">
            <input type="checkbox"/>
            <div className="content">
                <span>{worksElement.worksElementName}</span>
            </div>
            <button>Delete</button>
        </div>
    )
}

export default ToDoWorksList;