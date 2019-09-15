import React, { Component } from "react";
import RadioList from './Components/Inputs/InputsRadio';

class App extends Component {
  state = {
    elements: ["option1", "option2", "option3"],
    selectedOption: "option2"
  };


  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state.selectedOption);
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              <RadioList elements={this.state.elements} selected={this.state.selectedOption} />

              <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
