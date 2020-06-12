import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishComponent';

const RenderMenuItem = ({ dish, onClick }) => {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

class Menu extends Component {

  constructor(props) {

    super(props);

    this.state = {
      dishes: DISHES,
      selectDish: null
    }
  }

  onDishSelect(dishid) {
    this.setState({
      selectDish: dishid
    });
  }

  render() {

    const menu = this.state.dishes.map((dish) => {
      return (
        <div key="{dish.id}" className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} onClick={(dishid) => this.onDishSelect(dishid)} />
        </div>
      );
    });

    return (
      <div>
        <div className="row">{menu}</div>
        <div className="row">
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectDish)[0]} />
        </div>
      </div>
    );
  }
}

export default Menu;
