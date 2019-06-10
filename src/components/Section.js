import React from 'react';
import FontAwesome from 'react-fontawesome';

class Entry extends React.Component {
  handleMouseEnter = e => this.props.handleEnter(e.currentTarget.id)
  handleMouseLeave = () => this.props.handleLeave()

  render () {
    let {bullets, summary, id} = this.props.content

    bullets = bullets.map((bullet, index) => <li key={index}>{bullet}</li>)
    summary = summary? <span>{summary}</span>: null

    return (
        <div className="row align-items-end entry" id={id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <div className="col col-md-9">
                <h3 className="entry-title">{this.props.content.title}</h3>
                <h5 className="entry-subtitle">{this.props.content.subtitle}</h5>
            </div>
            <div className="col col-md-3">
                <h6 className="entry-period">{this.props.content.from} - {this.props.content.to}</h6>
                <h6 className="entry-place"> <FontAwesome name='map-marker'/> {this.props.content.at}</h6>
            </div>
            <div className="col col-md-10">
                <p style={{textAlign: 'justify'}}>{summary}</p>
                <ul>{bullets}</ul>
            </div>
        </div>
      )
  }
}

class Section extends React.Component {
  handleEnter = targetId => this.props.handleEnter(targetId)
  handleLeave = () => this.props.handleLeave()

  render () {
    const entries = this.props.entries.map(entry => <Entry key={entry.id} content={entry} handleEnter={this.handleEnter} handleLeave={this.handleLeave}/>)

    return (
        <div className="container-fluid section" id={this.props.title.toLowerCase()}>
          <h2 className="section-title"><span style={{borderBottom: '3px solid #000', paddingBottom: '3px'}}>{this.props.title.slice(0, 2)}</span>{this.props.title.slice(2)}</h2>
          <div className="section-entries">{entries}</div>
        </div>
      )
  }
}

export default Section
