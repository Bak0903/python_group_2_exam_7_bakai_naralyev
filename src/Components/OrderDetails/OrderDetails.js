import React, { Component } from 'react';
import './OrderDetails.css';
import OrderFood from './OrderFood/OrderFood';


class OrderDetails extends Component {

    render () {
        if (this.props.basket === []) return (<p>Ваша корзина пустая.Кликните по еде в меню, чтобы добавить!</p>);
        else {
            return (
            <div className={"order_details"}>
                <h3>Корзина</h3>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Кол-во</th>
                            <th>Сумма</th>
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
                                            onDelete={() => this.props.onDeleteFood(i)}
                                        />
                                    );
                                }
                            )
                        }
                        <hr/>
                        <tr className={"order_item"}>
                            <td>Всего: {this.props.total_price} с.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }}

}

export default OrderDetails;