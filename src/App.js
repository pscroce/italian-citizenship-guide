import React, { Component } from 'react';
import Guide from './components/Guide';
import Header from './components/Header';
import Select from 'react-select';
import './App.css';
const ancestorOptions = [
  { value: 'parent', label: 'Parent' },
  { value: 'gParent', label: 'Grandparent' },
  { value: 'ggParent', label: 'Great-grandparent' },

];
const options = [
  { value: 'mother', label: 'Mother' },
  { value: 'father', label: 'Father' },
  { value: 'gmother', label: 'Grandmother' },
  { value: 'gfather', label: 'Grandfather' },
  { value: 'ggmother', label: 'Great-grandmother' },
  { value: 'ggfather', label: 'Great-grandfather' }
];

class App extends Component {
    state = {
      ancestor: '',
      parent: '',
      gParent: '',
      ggParent: ''
    }
  handleAncestorChange = (ancestor) => {
    this.setState({ ancestor });
  }
  handleChange = (parent) => {
    this.setState({ parent });
  }
  handleGParentChange = (gParent) => {
    this.setState({ gParent });
  }
  handleGGParentChange = (ggParent) => {
    this.setState({ ggParent });
  }
  render() {
    const { ancestor } = this.state;
    const { parent } = this.state;
    const { gParent } = this.state;
    const { ggParent } = this.state;

    return (
      <div className="App">
        <Header></Header>
        <body>
          <Guide></Guide>

          <div className="form-wrapper"
            // style={styles.formWrapper}
            >
            <form
              // onSubmit={this.handleSubmit} style={styles.form}
              >

                <div>
                  if gg, show "select your gg's daughter or son (your g-mother or g-father)"
                  if g, show "select your g's daughter or son (your mother or father)"
                </div>
                <h3>Select your Italian ancestor</h3>
                <Select
                  value={ancestor}
                  onChange={this.handleAncestorChange}
                  options={ancestorOptions}
                />

                {
                  this.state.ancestor.value === 'parent' &&
                  <div>
                    <h3>Select your lineage</h3>
                    <Select
                      value={parent}
                      onChange={this.handleChange}
                      options={options}
                    />
                  </div>
                }
                {
                  this.state.ancestor.value === 'gParent' &&
                  <div>
                    <h3>Select your lineage</h3>
                    <Select
                      value={parent}
                      onChange={this.handleChange}
                      options={options}
                    />
                    <Select
                      value={gParent}
                      onChange={this.handleGParentChange}
                      options={options}
                    />
                  </div>
                }
                {
                  this.state.ancestor.value === 'ggParent' &&
                  <div>
                    <h3>Select your lineage</h3>
                    <Select
                      value={parent}
                      onChange={this.handleChange}
                      options={options}
                    />
                    <Select
                      value={gParent}
                      onChange={this.handleGParentChange}
                      options={options}
                    />
                    <Select
                      value={ggParent}
                      onChange={this.handleGGParentChange}
                      options={options}
                    />
                  </div>
                }

              <div className="inputGroup">
                <textarea type="text" rows="4" className="input-and-button input"
                  // style={[styles.input, styles.inputAndButton]}
                  // value={this.state.note}
                  // onChange={(event) => this.setState({ note: event.target.value })}
                  required >
                </textarea>
                <label htmlFor="Note"
                  // style={styles.label}
                  >
                  Note
                </label>
              </div>

              <button type="submit"
                id="buttonSubmitForm" className="input-and-button button"
                // style={this.state.submitted === false ? [styles.button, styles.inputAndButton] : [styles.button, styles.inputAndButton]}
                >
                Check Eligibility
              </button>
            </form>
          </div>


        </body>
        <footer>Italian Citizenship Guide</footer>
      </div>
    );
  }
}

export default App;
