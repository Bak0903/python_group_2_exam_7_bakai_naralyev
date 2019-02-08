import React, {Component} from 'react';
import Box from './Box/Box.js';

class Field extends Component {

    render () {
        return (
            Object.values(this.props.boxes).map(
                (box, i) => {
                    return (
                        <Box
                            key = {i}
                            currentBox = {box}
                            onBox = {() => {return this.props.onBox(box.boxId)}}
                        />
                    );
                }
            )
        );
    }

}

export default Field;