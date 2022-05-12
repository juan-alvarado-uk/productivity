import React, {Component, Fragment } from "react";
import axios from "axios";
import {API_URL} from "../constants";
import ColumnList from "./ColumnList"
import NewCategoryModal from "./NewCategoryModal";


function col_elements(categories, tasks) {
    let cols = [];
    for (let i = 0; i < categories.length; i++){
        let column = {};
        column.category = categories[i];
        let tsks = [];
        for (let j = 0; j < tasks.length; j++){
            if (categories[i].pk === tasks[j].category){
                tsks.push(tasks[j]);
            }
        }
        column.tasks = tsks;
        cols.push(column);
    }
    return cols;
}

class MainContainer extends Component {
    state = {
        categories: [],
        tasks: [],
    };

    componentDidMount() {
        this.resetState();
    }

    getCategories = () => {
        axios.get(API_URL + "categories/").then(res => this.setState({categories: res.data}));
    };


    getTasks = () => {
        axios.get(API_URL + "tasks/").then(res => this.setState({tasks: res.data}));
    };

    resetState = () => {
        this.getCategories();
        this.getTasks();
    };

    render(){
        const categories = this.state.categories
        const tasks = this.state.tasks
        const cols = col_elements(categories, tasks)

        return(
            <Fragment>
                <div className={"main-container"}>
                    {cols.map(col => (
                        <ColumnList
                            key={col.category.pk}
                            category={col.category}
                            tasks={col.tasks}
                            resetState={this.resetState}
                        />
                    ))}


                </div>
                <NewCategoryModal create={true} resetState={this.resetState}/>
            </Fragment>
        );
    }

}

export default MainContainer;