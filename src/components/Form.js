import React, { Component } from 'react';
import Select from 'react-select';
import '../App.css';

// If one's Italian ancestor is their parent, they don't need any additional ancestry.
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
const booleanOptions = [
  { value: 'no', label: 'No' },
  { value: 'yes', label: 'Yes' },
  { value: 'unsure', label: 'I don\'t know' },
];

class Form extends Component {
  state = {
    ancestor: '',
    grandparent: '',
    parent: '',
    ancestorNaturalized: '',
    ancestorWedlock: ''
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
  handleNaturalizedChange = (ancestorNaturalized) => {
    this.setState({ ancestorNaturalized });
  }
  handleWedlockChange = (ancestorWedlock) => {
    this.setState({ ancestorWedlock });
  }
  handleSubmit = () => {
    alert("you submitted the form")
  }

  render() {
    const { ancestor } = this.state;
    const { grandparent } = this.state;
    const { parent } = this.state;
    const { ancestorNaturalized } = this.state;
    const { ancestorWedlock } = this.state;


    // Took this syntax from here: https://react-select.com/styles
    const selectTheme = (theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
      ...theme.colors,
        primary25: '#e5e5e5',
        primary: '#c5c5c5',
      },
    });
    const selectStyles = {
      control: (provided, state) =>  ({
        ...provided,
        marginTop: 10,
        backgroundColor: '#f7f7f7'
      }),
      menuList: (provided, state) =>  ({
        ...provided,
        backgroundColor: '#f7f7f7'
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#3d3d3d' : '#3d3d3d',
      }),
    }
    return (
      <div className="form-wrapper">
        <h1>How To Get Italian Citizenship</h1>
        <p>Most people with Italian ancestors can get Italian dual citizenship and an Italian passport, along with all the benefits of European citizenship such as the rights to live, work, establish business, and study in any of the 31 countries in the European Economic Area. The process is achievable but marred by misinformation and bureaucratic bloat.  </p>
        <p>After I received Italian dual citizenship and an Italian passport in 2018 (a process I began in 2014 and which required thousands of hours of research, paperwork, phonecalls, etc.), I decided to make an Italian citizenship guide — something I hope will be actually useful, something better than the hundreds of outdated blogs and websites I had to wade through.</p>
        <p>Answer the questions below to check your eligibility.</p>
        <form onSubmit={this.handleSubmit}>
          <h2 className="no-margin-bottom">Select your Italian ancestor</h2>
          <p className="description">This is your closest biological ancestor who has or had Italian citizenship.</p>

            <Select
              value={ancestor}
              onChange={this.handleChange}
              options={ancestorOptions}
              theme={selectTheme}
              styles={selectStyles}
            />

            { // If one's Italian ancestor is their parent, they don't need any additional ancestry but they do need to prove their parent did not naturalize or renounce citizenship before they were born and that they were born when their parents were "in wedlock."
              (this.state.ancestor.value) &&
              <div>
                <h3 className="no-margin-bottom">Did your {this.state.ancestor.value} naturalize or renounce {this.state.ancestor.value.indexOf('mother') > -1 ? 'her' : 'his'} Italian citizenship for any reason before you were born?</h3>
                <p className="description">There are many reasons people choose to naturalize or renounce citizenship, ranging from standard immigration procedure to applying for top secret clearance in a government or military position.</p>
                <Select
                  value={ancestorNaturalized}
                  onChange={this.handleNaturalizedChange}
                  options={booleanOptions}
                  theme={selectTheme}
                  styles={selectStyles}
                />
                <h3 className="no-margin-bottom">Were you born while your {this.state.ancestor.value} was married to your {this.state.ancestor.value !== 'mother' && this.state.ancestor.value !== 'father' ? (this.state.ancestor.value.indexOf('great') > -1 ? 'great-grand' : 'grand') : ''}{this.state.ancestor.value.indexOf('mother') > -1 ? 'father' : 'mother'}?</h3>
                <p className="description">Italian law states that Italian citizenship may only be passed to offspring when birthed "in wedlock."</p>
                <Select
                  value={ancestorWedlock}
                  onChange={this.handleWedlockChange}
                  options={booleanOptions}
                  theme={selectTheme}
                  styles={selectStyles}
                />
              </div>
            }

            { // If one's Italian ancestor is their grandparent, they also need documents for their connecting parent.
              (this.state.ancestor.value === 'grandmother' || this.state.ancestor.value === 'grandfather') &&
              <div>
              <h3 className="no-margin-bottom">Now select your connecting parent</h3>
                <p className="description">This is the daughter or son of your Italian grandparent.</p>
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
                <p className="description">This is the daughter or son of your Italian great-grandparent.</p>
                  <Select
                    value={grandparent}
                    onChange={this.handleGrandparentChange}
                    options={grandparentOptions}
                    theme={selectTheme}
                    styles={selectStyles}
                  />
                <h3 className="no-margin-bottom">And also your connecting parent</h3>
                <p className="description">This is the daughter or son of your grandparent who is the son or daughter of your Italian great-grandparent.</p>
                  <Select
                    value={parent}
                    onChange={this.handleParentChange}
                    options={parentOptions}
                    theme={selectTheme}
                    styles={selectStyles}
                  />
              </div>
            }

            {
              (this.state.ancestor.value) &&
              <button type="submit" id="buttonSubmitForm" className="input-and-button button">
                Check Eligibility
              </button>
            }

        </form>
      </div>
    )
  }
}

export default Form;
