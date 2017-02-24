import React, { Component } from 'react';

import styles from './app.css';

export class Lamp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false,
    };

    this.turnOn = () => this.setState({ isOn: true });
    this.turnOff = () => this.setState({ isOn: false });
  }

  render() {
    return (
      <div>The lamp is {this.state.isOn ? 'on' : 'off'}!</div>
    );
  }
}
