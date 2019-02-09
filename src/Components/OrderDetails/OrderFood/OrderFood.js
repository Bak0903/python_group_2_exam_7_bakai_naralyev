import React, { Component } from 'react';
import './OrderFood.css';

class OrderFood extends Component {

    render () {
        return (
            <tr className={"order_item"}>
                <td>{this.props.name}</td>
                <td>{this.props.count}</td>
                <td>{this.props.price}</td>
                <td>
                    <button
                        onClick={this.props.onDelete}
                    >
                    X
                    </button></td>
            </tr>
        );
    }

}

export default OrderFood;