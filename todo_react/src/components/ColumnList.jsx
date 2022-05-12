import React from "react";
import NewCategoryModal from "./NewCategoryModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import TaskCard from "./TaskCard";

const ColumnList = (props) => {
        return (
            <div className={"column-list"}>
                <div className={"column-header"}>
                    {props.category.category_name}
                    &nbsp;&nbsp;
                    <NewCategoryModal
                        create={false}
                        category={props.category}
                        resetState={props.resetState}
                    />
                    &nbsp;&nbsp;
                    <ConfirmRemovalModal
                        pk={props.category.pk}
                        resetState={props.resetState}
                    />
                </div>
                {props.tasks.map(task => (
                    <TaskCard key={task.pk}
                              task_name={task.task_name}/>
                ))}
            </div>
        )


}

export default ColumnList;