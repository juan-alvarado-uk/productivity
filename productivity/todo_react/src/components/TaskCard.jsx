import React from "react";

const TaskCard = (props) => {
    return (
        <div className={"task-card"}>
            {props.task_name}
        </div>
    );
}

export default TaskCard;