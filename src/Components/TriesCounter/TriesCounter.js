import React, {Component} from "react";
import './TriesCounter.css';


class TriesCounter extends Component {
    render () {
        return (
            <div className={"counter"}>
                <span>Tries: {this.props.count}</span>
            </div>
        )
    }
}

export default TriesCounter;