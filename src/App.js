import React, { Component } from 'react';
import './App.css';
import Fields from './Components/Field/Field';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxes: this.generateBoxes()
        }
    };

    generateBoxes = () => {
      let boxes = [];
      let fieldSize = 36;
      let randomBox = Math.floor(Math.random() * 35);
      for (let i = 0; i < fieldSize; i++) {
        if (i === randomBox) {
          boxes.push(
            {
                boxId: i,
                boxClass: "clothedNotEmpty",
                boxIsDisabled: false
            }
          )
        }
        else  {
          boxes.push(
            {
                boxId: i,
                boxClass: "clothedEmpty",
                boxIsDisabled: false
            }
          );
        }
      }
      return boxes;
    };

    openBox = (id) => {
        let currrentField = this.state.boxes;
        let currentBox = currrentField[id];
        if (currentBox.className === "clothedNotEmpty") currentBox.className = "openNotEmpty";
        else ( currentBox.className = "openEmpty");
        currrentField[id] = currentBox;
        this.setState({ ...this.state,
            currrentField
        });
    };

  render() {
    return (
      <div className="App">
        <Fields
          boxes = {this.state.boxes}
          onCheck = {this.openBox}
        />
      </div>
    );
  }
}

export default App;
