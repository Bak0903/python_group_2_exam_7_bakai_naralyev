import React, { Component } from 'react';
import './OrderDetails.css';
import OrderFood from './OrderFood/OrderFood';


class OrderDetails extends Component {

    render () {
        if (this.props.basket.length === 0) {
            return (
                <div className={"order_details"}>
                    <h3 className={"title"}>Корзина:</h3>
                    <p className={"empty"}>Пока здесь ничего нет...</p>
                </div>);
        }
        else {
            return (
                <div className={"order_details"}>
                    <h3 className={"title"}>Корзина:</h3>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <th></th>
                            <th className={"colum"}><span>Кол-во</span></th>
                            <th className={"colum"}>Сумма</th>
                        </tr>
                        {
                            Object.values(this.props.basket).map(
                                (item, i) => {
                                    return (
                                        <OrderFood
                                            key={i}
                                            name={item.name}
                                            price={item.price}
                                            count={item.count}
                                            onDelete={() => this.props.onDeleteFood(item.id, "removeOrDelete")}
                                        />
                                    );
                                }
                            )
                        }
                        </tbody>
                    </table>
                    <hr/>
                    <span className={"summ"}>Всего: {this.props.total_price} с.</span>
                </div>
            );
        }
    }
}

export default OrderDetails;