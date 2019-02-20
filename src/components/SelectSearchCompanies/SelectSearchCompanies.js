import React, { Component } from "react";
import axios from "axios";
import debounce from "debounce-promise/dist";
import SelectSearch from "../SelectSearch";
import { SEARCH_API_URL, DEBOUNCE } from "../../constants";

class SelectSearchCompanies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      selectedOption: this.props.defaultValue,
      actionOnSelectedOption: this.props.updateField
    };
  }

  componentWillReceiveProps(nextProps) {
    this.promiseOptions(nextProps.defaultValue.label);
    this.setState({
      selectedOption: nextProps.defaultValue
    });
  }
  promiseOptions = inputValue => {
    return axios.get(`${SEARCH_API_URL}${inputValue}`).then(res => {
      const companies = res.data;

      const suggestions = companies.map(company => {
        return { label: company.name, value: company.name };
      });
      this.setState({ suggestions });
      return suggestions;
    });
  };

  handleChange = (selectedOption, { action }) => {
    // you can use the 'action' to do different things here
    this.setState({
      selectedOption
    });
    // // this is for update action on selectedOption
    // // will use the noop defaultProp if the dev didn't define the prop, so no need to conditionally call
    this.state.actionOnSelectedOption(selectedOption.label);
  };

  render() {
    const { selectedOption, suggestions } = this.state;

    return (
      <div className="SelectSearchCompanies">
        <SelectSearch
          label="companies"
          name="companies"
          inputId="select-search-autocomplete"
          value={selectedOption}
          defaultOptions={suggestions}
          loadOptions={debounce(this.promiseOptions, DEBOUNCE)}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SelectSearchCompanies;
