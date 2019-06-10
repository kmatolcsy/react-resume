import React from 'react';
import Header from './Header'
import Section from './Section'
import SectionShort from './SectionShort'
import SectionSkills from './SectionSkills'
import Footer from './Footer'

class Resume extends React.Component {
  handleEnter = targetId => this.props.handleEnter(targetId)
  handleLeave = () => this.props.handleLeave()

  render () {
      let {experience, education, certifications, awards, extracurricular, skills} = this.props.sections
    return (
        <div className="resume">
          <Header />
          <Section title="EXPERIENCE" entries={experience} handleEnter={this.handleEnter} handleLeave={this.handleLeave}/>
          <Section title="EDUCATION" entries={education} handleEnter={this.handleEnter} handleLeave={this.handleLeave}/>
          <Section title="EXTRACURRICULAR" entries={extracurricular} handleEnter={this.handleEnter} handleLeave={this.handleLeave}/> 
          <SectionShort title="CERTIFICATIONS" entries={certifications} handleEnter={this.handleEnter} handleLeave={this.handleLeave}/>
          <SectionShort title="AWARDS" entries={awards} handleEnter={this.handleEnter} handleLeave={this.handleLeave}/>
          <SectionSkills title="SKILLS" entries={skills} />
          <Footer />
        </div>
      )
  }
}

export default Resume
