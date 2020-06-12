import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

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
    </div>
  );
}


const DishComponent = ({ dish }) => {

  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={dish} />
          <RenderComment comments={dish.comments} />
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
