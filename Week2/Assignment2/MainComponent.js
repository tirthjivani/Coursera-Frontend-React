import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishComponent from './DishComponent';
import { About } from './AboutComponent';
import { Header } from './Header';
import { Footer } from './Footer';
import { Home } from './Home';
import { Switch, Route, Redirect} from 'react-router-dom';
import { Contact } from './Contactus';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';


class Main extends Component {
  
  constructor(state) {
    super(state)
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    }
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          comment={this.state.comments.filter((comment) => comment.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
        />
      );
    }

    const DishWithId = ({ match }) => {
      return (
        <DishComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
          comments={this.state.comments.filter((dish) => dish.id === parseInt(match.params.dishId))} />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default Main;
