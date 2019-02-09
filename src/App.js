import React, { Component } from 'react';
import './App.css';
import AddItems from './Components/AddItems/AddItems';
import OrderDetails from "./Components/OrderDetails/OrderDetails";


class App extends Component {

  constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                  name: "Гамбургер", price: 80, className: "fas fa-utensils",
                },
                {
                  name: "Кофе", price: 70, className: "fas fa-coffee",
                },
                {
                  name: "Чисбургер", price: 90, className: "fas fa-utensils",
                },
                {
                  name: "Чай", price: 50, className: "fas fa-coffee",
                },
                {
                  name: "Фри", price: 45, className: "fas fa-utensils",
                },
                {
                  name: "Кола", price: 40, className: "fas fa-coffee",
                },
            ],
            orderDetails: [],
            totalPrice: 0,
        };
    };


  actionWithFood = (id, action) => {
    let orderDetails = this.state.orderDetails;

    if (action === 'add')
      orderDetails = this.addFood(id, orderDetails);

    else if (action === 'removeOrDelete')
      orderDetails = this.removeOrDelete(id, orderDetails);

    let totalPrice = this.calculateTotalPrice(orderDetails);
    this.setState({
            ...this.state,
            orderDetails,
            totalPrice
        }
    );
  };


  addFood = (id, basket) => {
    let food = "";
    let foodId = basket.findIndex(orderFood => {
            return orderFood.id === id;
        });

    if (foodId < 0) {
      food = this.state.items[id];
      basket.push(
        {id: id, name: food.name, price: food.price, count: 1,}
      );
    }

    else {
      food = basket[foodId];
      food.count = food.count + 1;
      food.price = food.price + this.state.items[id].price;
    }

    return basket;
  };


  removeOrDelete = (id, basket) => {
    console.log(id);
    let foodId = basket.findIndex(orderFood => {
            return orderFood.id === id;
        });
    console.log(foodId);
    console.log(basket[foodId]);
    if (basket[foodId].count > 1) {
      let food = basket[foodId];
      food.count = food.count - 1;
      food.price = food.price - this.state.items[id].price;
    }

    else
      basket.splice(foodId, 1);

    return basket;
  };

  calculateTotalPrice = (basket) => {
    let totalPrice = 0;

    for(let food in basket)
      if (basket.hasOwnProperty(food))
        totalPrice = totalPrice + basket[food].price;

    return totalPrice;
  };


  render() {
    return (
      <div className="App">
        <OrderDetails
          total_price={this.state.totalPrice}
          basket={this.state.orderDetails}
          onDeleteFood={this.actionWithFood}
        />
        <AddItems
          menu={this.state.items}
          onAddFood={this.actionWithFood}
        />
      </div>
    );
  }
}

export default App;
