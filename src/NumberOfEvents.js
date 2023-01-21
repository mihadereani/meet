import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = { noe: 32 };

  handleInputChanged = (event) => {
    const inputValue = event.target.value;
    let errText;

    if (inputValue < 0 || inputValue === 0) inputValue = 0;
    if (!inputValue) errText = 'Number of events is zero.';
    else if (inputValue > 32) {
      errText = 'Maximum number of events is 32.';
      inputValue = 32;
    }

    this.props.updateEvents(null, inputValue);
    this.setState({
      noe: inputValue,
      errorTest: errText,
    });
    console.log(this.props);
  };

  render() {
    const { noe } = this.state;
    return (
      <div className='NumberOfEvents'>
        <h3># of Events:</h3>
        <input
          className='noe-input'
          type='number'
          value={noe}
          onChange={(event) => {
            this.handleInputChanged(event);
          }}
        ></input>
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
