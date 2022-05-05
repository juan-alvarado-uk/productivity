import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";


class NewCategoryForm extends React.Component {
  state = {
    pk: 0,
    category_name: "",
  };

  componentDidMount() {
    if (this.props.category) {
      const { pk, category_name } = this.props.category;
      this.setState({ pk, category_name });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createCategory = e => {
    e.preventDefault();
    axios.post(API_URL + "categories/", this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editCategory = e => {
    e.preventDefault();
    axios.put(API_URL + "categories/" + this.state.pk + "/", this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.category ? this.editCategory : this.createCategory}>
        <FormGroup>
          <Label for="category_name">Nombre:</Label>
          <Input
            type="text"
            name="category_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.category_name)}
          />
        </FormGroup>
        <Button>Enviar</Button>
      </Form>
    );
  }
}

export default NewCategoryForm;