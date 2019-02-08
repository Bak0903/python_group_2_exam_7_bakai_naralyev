import React, { Component } from 'react';
import './App.css';
import Fields from './Components/Field/Field';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: this.generateBoxes(),
            clicks: 0,
        };

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
                boxClass: "clothed box secret",
                boxIsDisabled: false
            }
          )
        }
        else  {
          boxes.push(
            {
                boxId: i,
                boxClass: "clothed box Empty",
                boxIsDisabled: false
            }
          );
        }
      }
      return boxes;
    };

    openBox = (id) => {
        let boxes = this.state.boxes;
        let currentBox = boxes[id];
        let clicks = this.state.clicks;
        currentBox = this.checkBox(currentBox);
        boxes[id] = currentBox;
        clicks = clicks + 1;
        this.setState({ ...this.state,
            boxes,
            clicks
        });
    };

    disableAllBoxes = (boxes) => {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].boxIsDisabled = true;
        }
        this.setState({ ...this.state,
            boxes
        });
    };

    checkBox = (ceckingBox) => {
        let currrentField = this.state.boxes;
        if (ceckingBox.boxClass === "clothed box secret") {
            ceckingBox.boxClass = "NotEmpty box";
            this.disableAllBoxes(currrentField);
        }
        else {
            ceckingBox.boxClass = "open box";
        }
        ceckingBox.boxIsDisabled = true;
        return ceckingBox;
    };

    resetGame = () => {
        let boxes = this.generateBoxes();
        let clicks = 0;
        this.setState({ ...this.state,
            boxes,
            clicks
        });
    };

  render() {
    return (
      <div className="App">
        <Fields
          boxes = {this.state.boxes}
          onBox = {this.openBox}
        />
        <button
            onClick={this.resetGame}
        >
            Reset
        </button>
      </div>
    );
  }
}

export default App;
