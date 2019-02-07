import React, {Component} from 'react';

class Box extends Component {

    render () {
        return (
            <div
                className={this.props.currentBox.boxClass}
                id={this.props.currentBox.id}
                aria-disabled={this.props.currentBox.boxIsDisabled}
                onClick={this.props.onCheck}
            >
            </div>
        );
    }

}

export default Box;