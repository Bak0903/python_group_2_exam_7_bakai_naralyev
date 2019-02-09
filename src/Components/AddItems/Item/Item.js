import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

    render () {
        return (
            <div className={"item"} onClick={this.props.onClickEvent}>
                <span className={"icon"}><i className={this.props.className}></i></span>
                <div className={"info"}>
                    <div
                    >
                        {this.props.name}
                    </div>
                    <span className={"price"}>
                        Цена: {this.props.price}
                    </span>
                </div>
            </div>
        );
    }

}

export default Item;
