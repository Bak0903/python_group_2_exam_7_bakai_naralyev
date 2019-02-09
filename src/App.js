import React, { Component } from 'react';
import './App.css';
import AddItems from './Components/AddItems/AddItems';
import OrderDetails from "./Components/OrderDetails/OrderDetails";

// const TOTAL_PRICE = 0;
//
// const ITEMS=[];

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

  addFood = (id) => {
    let orderDetails = this.state.orderDetails;
    let food = "";
    let foodId = this.state.orderDetails.findIndex(orderFood => {
            return orderFood.id === id;
        });
    if (foodId < 0) {
      food = this.state.items[id];
      orderDetails.push(
        {id: id, name: food.name, price: food.price, count: 1,}
      );
    }
    else {
      food = this.state.orderDetails[foodId];
      console.log(food);
      food.count = food.count + 1;
      food.price = food.price + this.state.items[id].price;
    }
    let totalPrice = this.calculateTotalPrice();
    this.setState({
            ...this.state,
            orderDetails,
            totalPrice
        }
    );
    console.log(this.state)
  };

  deleteFood = (id) => {
    let orderDetails = this.state.orderDetails;
    if (orderDetails[id].count > 1) {
      let food = orderDetails[id];
      food.count = food.count - 1;
      food.price = food.price - this.state.items[id].price;
    }
    else {
      orderDetails.splice(id, 1);
    }
    let totalPrice = this.calculateTotalPrice();
    this.setState({
        ...this.state,
        orderDetails,
        totalPrice
        }
    );
  };

  calculateTotalPrice = () => {
    let totalPrice = 0;
    console.log(totalPrice);
    let orderFood = this.state.orderDetails;
    for(var food in orderFood) {
            totalPrice = totalPrice + orderFood[food].price;
            console.log(totalPrice);
        }
    return totalPrice;
  };

  render() {
    return (
      <div className="App">
        <OrderDetails
          total_price={this.state.totalPrice}
          basket={this.state.orderDetails}
          onDeleteFood={this.deleteFood}
        />
        <AddItems
          menu={this.state.items}
          onAddFood={this.addFood}
        />
      </div>
    );
  }
}

export default App;
