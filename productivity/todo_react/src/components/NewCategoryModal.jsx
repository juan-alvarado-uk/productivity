import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import NewCategoryForm from "./NewCategoryForm";
import { BsFillPencilFill } from "react-icons/bs";

class NewCategoryModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;
    let title = "Edición de Categoría";
    let button = <button className={"edit_button"} onClick={this.toggle}><BsFillPencilFill/></button>;

    if (create) {
      title = "Nueva categoría";

      button = (
        <button
          color="primary"
          className="new-button"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Nueva categoría
        </button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewCategoryForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              category={this.props.category}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewCategoryModal;