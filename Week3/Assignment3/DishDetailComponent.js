import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const CommentComponent = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const maxLength = (len) => (val) => !(val) || (val.length <= len);

  const minLength = (len) => (val) => val && (val.length >= len);

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  }

  return (
    <div>
      <Button outline onClick={toggle}><span className="fa fa-pencil fa-lg"> Submit Comment</span></Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Col md={12}>
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  className="form-control"
                  model=".rating"
                  id="rating"
                  name="rating">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={12}>
                <Label htmlFor="name">Your Name</Label>
                <Control.text
                  model=".name"
                  className="form-control"
                  placeholder="Your Name"
                  validators={{
                    minLength: minLength(3), maxLength: maxLength(15)
                  }} />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={12}>
                <Label htmlFor="message">Comment</Label>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="6"
                  className="form-control" />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={12}>
                <Button type="submit" color="primary">
                  Submit
                  </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
}

const RenderDish = ({ dish }) => {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

const RenderComment = ({ comments }) => {
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {
          comments.map((comment) => {
            return (
              <div>
                <p>{comment.comment}</p>
                <p>--{comment.author},{comment.date}</p>
              </div>
            );
          })
        }
      </ul>
      <CommentComponent />
    </div>
  );
}


const DishComponent = ({ dish, comments }) => {

  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={dish} />
          <RenderComment comments={comments} />
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default DishComponent;

