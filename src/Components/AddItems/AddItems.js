import React, { Component } from 'react';
import './AddItems.css';
import Item from './Item/Item';


class AddItems extends Component {

    render () {
        return (
            <div className={"add_items"}>
                <h3 className={"title"}>Меню</h3>
                <div className={'items'}>
                    {
                        Object.values(this.props.menu).map(
                            (item, i) => {
                                return (
                                    <Item
                                        key={i}
                                        name={item.name}
                                        price={item.price}
                                        className={item.className}
                                        onClickEvent={() => {return this.props.onAddFood(i, "add")}}
                                    />
                                );
                            }
                        )
                    }
                </div>
        </div>
        );
    }

}

export default AddItems;