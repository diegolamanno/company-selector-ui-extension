import React, { Component } from "react";
import SelectSearchCompanies from "./components/SelectSearchCompanies";
import { init as initContentfulExtension } from "contentful-ui-extensions-sdk";
import "./App.css";
// import { initApi } from "./api";

class App extends Component {
  state = {
    api: {},
    value: ""
  };

  componentDidMount() {
    initContentfulExtension(api => {
      api.window.startAutoResizer();

      const storedValue =
        api.field.getValue() !== undefined ? api.field.getValue() : "";
      this.setState({
        value: { label: storedValue, value: storedValue },
        api: api
      });
    });
    // initApi(api => {
    //   api.window.startAutoResizer();
    //   const storedValue =
    //     api.field.getValue() !== undefined ? api.field.getValue() : "";
    //   this.setState({
    //     value: { label: storedValue, value: storedValue },
    //     api: api
    //   });
    // });
  }

  updateField = value => {
    this.setState({
      value: {
        label: value,
        value
      }
    });

    this.state.api.field.setValue(value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <SelectSearchCompanies
          defaultValue={value}
          updateField={this.updateField}
        />
      </div>
    );
  }
}

export default App;
