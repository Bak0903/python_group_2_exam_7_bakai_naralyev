import React, {Component} from 'react';
import './Box.css';


class Box extends Component {

    render () {
        return (
            <button
                className={this.props.currentBox.boxClass}
                id={this.props.currentBox.id}
                disabled={this.props.currentBox.boxIsDisabled}
                onClick={this.props.onBox}
            >
            </button>
        );
    }

}

export default Box;