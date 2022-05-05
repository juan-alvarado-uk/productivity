import React from "react";

const Header = (props) => {
    return (
        <div className={"todo_row"}>
            <p className={"page-header"}>{props.title}</p>
        </div>
    );
}

export default Header;