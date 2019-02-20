import React, { PureComponent } from "react";
import AsyncSelect from "react-select/lib/Async";
// import './SelectSearch.scss'
// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: "1px dotted pink",
//     color: state.isSelected ? "red" : "blue",
//     padding: 20
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: 200
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = "opacity 300ms";

//     return { ...provided, opacity, transition };
//   }
// };

class SelectSearch extends PureComponent {
  render() {
    const {
      label,
      name,
      inputId,
      value,
      defaultOptions,
      loadOptions,
      onChange
    } = this.props;
    return (
      <div className="select-search">
        {label && (
          <div className="select-search__label">
            <label htmlFor={inputId}>{label}</label>
          </div>
        )}
        <div
          className="select-search__select"
          data-qa-class="select-search__select"
        >
          <AsyncSelect
            // styles={customStyles}
            name={name}
            label={label}
            defaultMenuIsOpen
            inputId={inputId}
            value={value}
            defaultOptions={defaultOptions}
            loadOptions={loadOptions}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}

export default SelectSearch;
