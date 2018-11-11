import React, { Component } from 'react';
import Select from 'react-select';
import '../App.css';

// If one's Italian ancestor is their parent, they don't need anything else.
// If one's Italian ancestor is their grandparent, they also need documents for their connecting parent.
// If one's Italian ancestor is their great-grandparent, they also need documents for their connecting grandparent and parent.
const ancestorOptions = [
  { value: 'mother', label: 'Mother' },
  { value: 'father', label: 'Father' },
  { value: 'grandmother', label: 'Grandmother' },
  { value: 'grandfather', label: 'Grandfather' },
  { value: 'great-grandmother', label: 'Great-grandmother' },
  { value: 'great-grandfather', label: 'Great-grandfather' }
];
const grandparentOptions = [
  { value: 'grandmother', label: 'Grandmother' },
  { value: 'grandfather', label: 'Grandfather' },
];
const parentOptions = [
  { value: 'mother', label: 'Mother' },
  { value: 'father', label: 'Father' },
];

class Form extends Component {
  state = {
    ancestor: '',
    grandparent: '',
    parent: ''
  }
  // These could be abstracted and consolidated but that's confusing to me. Haaalp.
  handleChange = (ancestor) => {
    this.setState({ ancestor });
  }
  handleGrandparentChange = (grandparent) => {
    this.setState({ grandparent });
  }
  handleParentChange = (parent) => {
    this.setState({ parent });
  }
  handleSubmit = () => {
    alert("you submitted the form")
  }

  render() {
    const { ancestor } = this.state;
    const { grandparent } = this.state;
    const { parent } = this.state;

    // Took this syntax from here: https://react-select.com/styles
    const selectTheme = (theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
      ...theme.colors,
        primary25: '#e5e5e5',
        primary: '#3d3d3d',
      },
    });
    const selectStyles = {
      control: (provided, state) =>  ({
        ...provided,
        marginTop: 10,
      }),
    }
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <h2 className="no-margin-bottom">Select your Italian ancestor</h2>
          <p className="description">This is your closest ancestor who has or had Italian citizenship.</p>

            <Select
              value={ancestor}
              onChange={this.handleChange}
              options={ancestorOptions}
              theme={selectTheme}
              styles={selectStyles}
            />

            { // If one's Italian ancestor is their parent, they don't need anything else.
              (this.state.ancestor.value === 'mother' || this.state.ancestor.value === 'father') &&
              <div>
                <h3>Nice! It'll be easy for you to get your citizenship. </h3>

              </div>
            }

            { // If one's Italian ancestor is their grandparent, they also need documents for their connecting parent.
              (this.state.ancestor.value === 'grandmother' || this.state.ancestor.value === 'grandfather') &&
              <div>
              <h3 className="no-margin-bottom">Now select your connecting parent</h3>
                <p className="description">This is the daughter or son of your Italian grandparent</p>
                <Select
                  value={parent}
                  onChange={this.handleParentChange}
                  options={parentOptions}
                  theme={selectTheme}
                  styles={selectStyles}
                />
              </div>
            }

            { // If one's Italian ancestor is their great-grandparent, they also need documents for their connecting grandparent and parent.
              (this.state.ancestor.value === 'great-grandmother' || this.state.ancestor.value === 'great-grandfather') &&
              <div>
                <h3 className="no-margin-bottom">Now select your connecting grandparent</h3>
                <p className="description">This is the daughter or son of your Italian great-grandparent</p>
                  <Select
                    value={grandparent}
                    onChange={this.handleGrandparentChange}
                    options={grandparentOptions}
                    theme={selectTheme}
                    styles={selectStyles}
                  />
                <h3 className="no-margin-bottom">And also your connecting parent</h3>
                <p className="description">This is the daughter or son of your grandparent who is the son or daughter of your Italian great-grandparent</p>
                  <Select
                    value={parent}
                    onChange={this.handleParentChange}
                    options={parentOptions}
                    theme={selectTheme}
                    styles={selectStyles}
                  />
              </div>
            }

          <button type="submit" id="buttonSubmitForm" className="input-and-button button">
            Check Eligibility
          </button>
        </form>
      </div>
    )
  }
}

export default Form;
