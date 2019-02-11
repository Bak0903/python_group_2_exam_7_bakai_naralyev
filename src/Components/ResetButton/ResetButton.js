import React, {Component} from "react";
import './ResertButton.css';


class ResetButton extends Component {
    render () {
        return (
            <div className={"reset_button"}>
                <button
                    onClick={() => this.props.onReset()}
                >
                Reset
                </button>
            </div>
        )
    }
}

export default ResetButton;
