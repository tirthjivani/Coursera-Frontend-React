import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const RenderCard = ({ item, isLoading, errMsg }) => {

  if (isLoading) {
    return (
      <Loading />
    );
  }
  else if (errMsg) {
    return (
      <h4>{errMsg}</h4>
    );
  }

  else {
    return (
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}


export const Home = (props) => {
  return (
    <div className="container">
      <div className="row align-props.items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} isLoading={props.dishesLoading} errMsg={props.dishesErrMsg} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} isLoading={props.leadersLoading} errMsg={props.leadersErrMess} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} isLoading={props.promoLoading} errMsg={props.promoErrMess} />
        </div>
      </div>
    </div>
  );
}
