import { Props } from "../Interfaces";

const ToDoWorksList = ({ worksElement, deleteWork }: Props) => {
    return (
        <div className="worksElement">
            <input type="checkbox" />
            <div className="content">
                <span>{worksElement.worksElementName}</span>
            </div>
            <button
                onClick={() => { deleteWork(worksElement.worksElementName) }}>
                DELETE
            </button>
        </div>
    )
}

export default ToDoWorksList;