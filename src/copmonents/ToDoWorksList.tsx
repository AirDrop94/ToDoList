import React from "react";
import { IWorksList } from "../Interfaces";
interface Props {
    worksElement: IWorksList;
    completeWork(worksNameToDelete: string): void;
}

const ToDoWorksList = ({worksElement, completeWork}: Props) => {
    return (
        <div className="worksElement">
            <input type="checkbox"/>
            <div className="content">
                <span>{worksElement.worksElementName}</span>
            </div>
            <button 
                onClick={() => { completeWork(worksElement.worksElementName)}}>
                Delete
            </button>
        </div>
    )
}

export default ToDoWorksList;