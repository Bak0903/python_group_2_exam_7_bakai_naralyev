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
                    <span
                        className={"fas fa-trash-alt"}
                        onClick={this.props.onDelete}
                    >
                    </span></td>
            </tr>
        );
    }

}

export default OrderFood;