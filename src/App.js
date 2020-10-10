import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );

    this.setState({
      counters,
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleReset = () => {
    this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
			onDelete={this.handleDelete}
			counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
