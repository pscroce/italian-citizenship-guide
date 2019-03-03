import React, { Component } from 'react';
import GuideSteps from './GuideSteps';

import Select from 'react-select';

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
  { value: 'yes', label: 'Yes' }
  // { value: 'unsure', label: 'I don\'t know' },
];

class Form extends Component {
  state = {
    ancestor: '',
    greatGrandparent: '',
    grandparent: '',
    parent: '',
    ancestorNaturalized: '',
    ancestorWedlock: '',
    greatGrandmother1948: '',
    grandmother1948: '',
    mother1948: '',
    isEligible: null,
    isEligibleOutOfWedlock: null,
    femaleAfter1948: null,
    guideIsOpen: false
  }
  // These could be abstracted to handleChange and consolidated but that's confusing to me. Haaalp.
  handleAncestorChange = (ancestor) => {
    this.setState({ ancestor });
    if (ancestor.value === 'mother' || ancestor.value === 'father') {
      this.setState({parent: {value: ancestor.value, label: ancestor.label}, grandparent: '', greatGrandparent: ''})
    } else if (ancestor.value === 'grandmother' || ancestor.value === 'grandfather') {
      this.setState({grandparent: {value: ancestor.value, label: ancestor.label}, parent:'', greatGrandparent: ''})
    } else if (ancestor.value === 'great-grandmother' || ancestor.value === 'great-grandfather') {
      this.setState({greatGrandparent: {value: ancestor.value, label: ancestor.label}, parent: '', grandparent: ''})
    }
    // this.setState({ isEligible: this.isEligible() });
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
  handleGreatGrandmother1948Change = (greatGrandmother1948) => {
    this.setState({ greatGrandmother1948 });
  }
  handleGrandmother1948Change = (grandmother1948) => {
    this.setState({ grandmother1948 });
  }
  handleMother1948Change = (mother1948) => {
    this.setState({ mother1948 });
  }
  openGuide = (e) => {
    e.preventDefault();
    this.setState({ guideIsOpen: !this.state.guideIsOpen });
  }
  isEligible = (e) => {
    e.preventDefault();

    let eligible;
    let eligibleOutOfWedlock;

    let greatGrandmother1948 = this.state.greatGrandmother1948.value === 'yes';
    let grandmother1948 = this.state.grandmother1948.value === 'yes';
    let mother1948 = this.state.mother1948.value === 'yes';

    let motherAncestor           = this.state.ancestor.value === 'mother';
    let grandmotherAncestor      = this.state.ancestor.value === 'grandmother';
    let greatGrandmotherAncestor = this.state.ancestor.value === 'great-grandmother';

    let mother           = this.state.parent.value === 'mother';
    let father           = this.state.parent.value === 'father';
    let grandmother      = this.state.grandparent.value === 'grandmother';
    let grandfather      = this.state.grandparent.value === 'grandfather';
    let greatGrandmother = this.state.greatGrandparent.value === 'great-grandmother';
    let greatGrandfather = this.state.ancestor.value === 'great-grandfather';

    // Before a 2009 equality ruling, the "1948 Rule" precluded women from passing Italian citizenship to children born before the date Italy became a Republic, January 1, 1948. The process for attaining citizenship varies depending on this.
    let oneGenFemaleAfter1948 =   (motherAncestor && mother1948)
    let twoGenFemaleAfter1948 =   (grandmotherAncestor      && grandmother1948 && father )                    || (grandmotherAncestor      && grandmother1948  && mother && mother1948)
    let threeGenFemaleAfter1948 = (greatGrandmotherAncestor && greatGrandmother1948 && grandfather && father) || (greatGrandmotherAncestor && greatGrandmother1948 && grandmother && grandmother1948 && mother && mother1948) || (greatGrandmotherAncestor && greatGrandmother1948 && grandfather && mother && mother1948) || (greatGrandmotherAncestor && greatGrandmother1948 && grandmother && grandmother1948 && father)
    let femaleAfter1948 = (oneGenFemaleAfter1948 || twoGenFemaleAfter1948 || threeGenFemaleAfter1948);

    let baselineEligibility = this.state.ancestorNaturalized.value === 'no';
    let baselineEligibilityOutOfWedlock = this.state.ancestorNaturalized.value === 'no' && this.state.ancestorWedlock.value === 'yes';

    if      (baselineEligibility && mother){
      eligible = true;}
    else if (baselineEligibility && grandmother && mother){
      eligible = true;}
    else if (baselineEligibility && greatGrandmother && grandmother && mother){
      eligible = true;} // end all female
    else if (baselineEligibility && father){
      eligible = true;}
    else if (baselineEligibility && grandfather && father){
      eligible = true;}
    else if (baselineEligibility && greatGrandfather && grandfather && father){
      eligible = true;} // end all male
    else if (baselineEligibility && greatGrandmother && grandmother && father){
      eligible = true;}
    else if (baselineEligibility && greatGrandmother && grandfather && father){
      eligible = true;}
    else if (baselineEligibility && greatGrandmother && grandfather && mother){
      eligible = true;}
    else if (baselineEligibility && greatGrandfather && grandmother && mother){
      eligible = true;}
    else if (baselineEligibility && greatGrandfather && grandfather && mother){
      eligible = true;}
    else if (baselineEligibility && greatGrandfather && grandmother && father){
      eligible = true;}
    else if (eligible === true && baselineEligibilityOutOfWedlock === true){
      eligibleOutOfWedlock = true;
    }
    else {
      eligible = false;}
    this.setState({ isEligible: eligible, femaleAfter1948: femaleAfter1948, isEligibleOutOfWedlock: eligibleOutOfWedlock});
  }

  render() {
    const { ancestor } = this.state;
    const { greatGrandparent} = this.state;
    const { grandparent } = this.state;
    const { parent } = this.state;
    const { ancestorNaturalized } = this.state;
    const { ancestorWedlock } = this.state;
    const { greatGrandmother1948 } = this.state;
    const { grandmother1948 } = this.state;
    const { mother1948 } = this.state;

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
        backgroundColor: '#f7f7f7',
      }),
      container: (provided, state) =>  ({
        ...provided,
        marginTop: 10,
        // width: 200,
        marginBottom: 'auto',
      }),
      menuList: (provided, state) =>  ({
        ...provided,
        backgroundColor: '#f7f7f7',
        padding: 0,
      }),
      menu: (provided, state) =>  ({
        ...provided,
        marginTop: -40,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        border: '1px solid #c5c5c5',

      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#3d3d3d' : '#3d3d3d',
      }),
    }
    const selectStylesFilled = {
      control: (provided, state) =>  ({
        ...provided,
        backgroundColor: '#f7f7f7',
      }),
      container: (provided, state) =>  ({
        ...provided,
        marginTop: 10,
        // width: 200,
        marginBottom: 'auto',
        boderColor: 'green',
      }),
      menuList: (provided, state) =>  ({
        ...provided,
        backgroundColor: '#f7f7f7',
        padding: 0,
      }),
      menu: (provided, state) =>  ({
        ...provided,
        marginTop: -40,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        border: '1px solid #c5c5c5',

      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#3d3d3d' : '#3d3d3d',
      }),
    }
    return (
      <div className="form-wrapper question__wrapper">
        <h1 className="no-margin-bottom">How To Get Italian Citizenship</h1>
        <h2 className="no-margin-top">Dual Italian Citizenship Jure Sanguinis</h2>
        <p>People with Italian family up to three generations back can get Italian citizenship and an Italian passport.</p>
        <p><b>Want to apply? Answer these questions to see if you're eligible.</b></p>

        <form>

        <div className="question__wrapper">
          <div className="question">
            <p className="question-title">Who is your Italian ancestor?</p>
            <p className="description">This is your closest biological ancestor who has or had Italian citizenship.</p>
          </div>
            <Select isSearchable={false}
              value={ancestor}
              onChange={this.handleAncestorChange}
              options={ancestorOptions}
              theme={selectTheme}
              styles={this.ancestor && selectStylesFilled || selectStyles}
            />
        </div>

        { // If one's Italian ancestor is their grandparent, they also need documents for their connecting parent.
          (ancestor.value === 'mother' || ancestor.value === 'father') &&
          <div className="question__wrapper">
            <p className="question-title">Were you born while your parents were married?</p>
            <p className="description">The Italian jure sanguinis law states that Italian citizenship may only be passed to children "born in wedlock."</p>
            <Select isSearchable={false}
              value={ancestorWedlock}
              onChange={this.handleWedlockChange}
              options={booleanOptions}
              theme={selectTheme}
              styles={selectStyles}
            />
          </div>
        }

        { // If one's Italian ancestor is their grandparent, they also need documents for their connecting parent.
          (ancestor.value === 'grandmother' || ancestor.value === 'grandfather') &&
          <div>
            <div className="question__wrapper">
              <div className="question">
                <p className="question-title">Which of your parents is the son or daughter of your Italian {grandparent.value || 'grandparent'}?</p>
                <p className="description">This is your parent on your Italian side.</p>
              </div>
              <Select isSearchable={false}
                value={parent}
                onChange={this.handleParentChange}
                options={parentOptions}
                theme={selectTheme}
                styles={selectStyles}
              />
            </div>
            <div className="question__wrapper">
              <p className="question-title">Was everyone in your Italian lineange born while their parents were married?</p>
              <p className="description">For you, this is a question of whether your grandparents were married when your Italian {parent.value || 'parent'} was born and whether your parents were married when you were born. The Italian jure sanguinis law states that Italian citizenship may only be passed to children "born in wedlock."</p>
              <Select isSearchable={false}
                value={ancestorWedlock}
                onChange={this.handleWedlockChange}
                options={booleanOptions}
                theme={selectTheme}
                styles={selectStyles}
              />
            </div>
          </div>
        }

        { // If one's Italian ancestor is their great-grandparent, they also need documents for their connecting grandparent and parent.
          (ancestor.value === 'great-grandmother' || ancestor.value === 'great-grandfather') &&
          <div>
            <div className="question__wrapper">
              <p className="question-title">Which of your grandparents is the son or daughter of your Italian {greatGrandparent.value || 'great-grandparent'}?</p>
              <p className="description">This is your grandparent on your Italian side.</p>
                <Select isSearchable={false}
                  value={grandparent}
                  onChange={this.handleGrandparentChange}
                  options={grandparentOptions}
                  theme={selectTheme}
                  styles={selectStyles}
                />
              </div>
            <div className="question__wrapper">
              <p className="question-title">Which of your parents is the son or daughter of your Italian {grandparent.value || 'grandparent'}?</p>
              <p className="description">This is your parent on your Italian side.</p>
                <Select isSearchable={false}
                  value={parent}
                  onChange={this.handleParentChange}
                  options={parentOptions}
                  theme={selectTheme}
                  styles={selectStyles}
                />
            </div>
            <div className="question__wrapper">
              <p className="question-title">Was everyone in your Italian lineange born while their parents were married?</p>
              <p className="description">For you, this is a question of whether your great-grandparents were married when your Italian {grandparent.value || 'grandparent'} was born, your grandparents were married when your Italian {parent.value || 'parent'} was born, and whether your parents were married when you were born. The Italian jure sanguinis law states that Italian citizenship may only be passed to children "born in wedlock."</p>
              <Select isSearchable={false}
                value={ancestorWedlock}
                onChange={this.handleWedlockChange}
                options={booleanOptions}
                theme={selectTheme}
                styles={selectStyles}
              />
            </div>
          </div>
        }

        { // They need to prove their parent did not naturalize or renounce citizenship before they were born and that they were born when their parents were "in wedlock."
          (ancestor.value) &&
          <div>
          <div className="question__wrapper">
            <p className="question-title">Did your {ancestor.value} naturalize or renounce {ancestor.value.indexOf('mother') > -1 ? 'her' : 'his'} Italian citizenship before you were born?</p>
            <p className="description">There are many reasons people choose to naturalize or renounce citizenship, ranging from standard immigration procedure to applying for top secret clearance in a government or military position.</p>
            <Select isSearchable={false}
              value={ancestorNaturalized}
              onChange={this.handleNaturalizedChange}
              options={booleanOptions}
              theme={selectTheme}
              styles={selectStyles}
            />
          </div>

            { // If your ancestor was a woman and was born before 1948
              (true) &&
              <div>
                {
                  (parent.value === 'mother') &&
                  <div className="question__wrapper">
                    <p className="question-title">Were you born after January 1, 1948?</p>
                    <p className="description">The process for getting Italian citizenship varies depending on the answer to this question.</p>
                    <Select isSearchable={false}
                      value={mother1948}
                      onChange={this.handleMother1948Change}
                      options={booleanOptions}
                      theme={selectTheme}
                      styles={selectStyles}
                    />
                  </div>
                }

                {
                  (grandparent.value === 'grandmother' && parent.value) &&
                  <div className="question__wrapper">
                    <p className="question-title">Was your {parent.value} born after January 1, 1948?</p>
                    <p className="description">The process for getting Italian citizenship varies depending on the answer to this question.</p>
                    <Select isSearchable={false}
                      value={grandmother1948}
                      onChange={this.handleGrandmother1948Change}
                      options={booleanOptions}
                      theme={selectTheme}
                      styles={selectStyles}
                    />
                  </div>
                }
                {
                  (greatGrandparent.value === 'great-grandmother' && grandparent.value) &&
                  <div className="question__wrapper">
                    <p className="question-title">Was your {grandparent.value} born after January 1, 1948?</p>
                    <p className="description">The process for getting Italian citizenship varies depending on the answer to this question.</p>
                    <Select isSearchable={false}
                      value={greatGrandmother1948}
                      onChange={this.handleGreatGrandmother1948Change}
                      options={booleanOptions}
                      theme={selectTheme}
                      styles={selectStyles}
                    />
                  </div>
                }
              </div>
            }

            {
              (ancestor.value) &&
              <button onClick={this.isEligible} className="-large primary">Check Eligibility</button>
            }

            {
              (this.state.isEligible === true) &&
              <div className="question__wrapper">
               <p className="question-title">Congratulations! You're eligible for Italian citizenship.</p>
               <p>Click the button below to read all the steps required to apply.</p>
               { (!this.state.femaleAfter1948) &&
                 <p>Because part of your lineage includes a woman who gave birth before 1948 to the next person in your lineage, your application can be submitted through the Rome Tribunal.</p>
               }
               { (!this.state.isEligibleOutOfWedlock) &&
                 <p>Sometimes applicants whose lineage includes an "out of wedlock" birth have trouble proving paternity for the child born out of wedlock. You will likely need to show a birth certificate with both parents' names for any child born out of wedlock in your family and may also be asked for proof that the parents lived together.</p>
               }
               { (this.state.femaleAfter1948) &&
                 <p>Your application can be submitted through any Italian consulate.</p>
               }
               <button onClick={this.openGuide} className="-large empty">{this.state.guideIsOpen ? "Close Guide" : "Open Guide"}</button>
              </div>
            }
            {
              (this.state.isEligible === false) &&
              <div className="question__wrapper">
               <p className="question-title">Sorry! You are not eligible for Italian citizenship.</p>
               <p className="description">Click the button below to read all the steps required to apply.</p>
               <button onClick={this.openGuide} className="-large empty">{this.state.guideIsOpen ? "Close Guide" : "Open Guide"}</button>
              </div>
            }
            {
              (this.state.guideIsOpen) &&
              <GuideSteps></GuideSteps>
            }
          </div>
        }

        </form>
      </div>
    )
  }
}

export default Form;
