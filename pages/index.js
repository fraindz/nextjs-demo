import React from "react";
import HelloW from "../src/HelloW";

class Index extends React.Component {
  static async getInitialProps() {
    return { time: new Date().toISOString() };
  }
  constructor(props) {
    super(props);
    this.state = { time: props.time };
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({ time: new Date().toISOString() });
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <HelloW time={this.state.time} />;
  }
}

export default Index;
