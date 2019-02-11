import React, {Component} from 'react';
import "./Field.css";
import Box from './Box/Box.js';

class Field extends Component {

    render () {
        return (
            <div className={"field"}>
                {
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
                }
            </div>
        );
    }

}

export default Field;