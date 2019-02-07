import React, {Component} from 'react';
import Box from './Box/Box.js';

class Field extends Component {

    render () {
        console.log(this.props.boxes);
        return (
            Object.values(this.props.boxes).map(
                (box, i) => {
                    return (
                        <Box
                            key = {i}
                            currentBox = {box}
                            onCheck = {this.props.onCheck}
                        />
                    );
                }
            )
        );
    }

}

export default Field;