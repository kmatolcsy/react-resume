import React from 'react'
import SkillBar from 'react-skillbars'

class Entry extends React.Component {
    render() {
        return (
            <div className="row align-items-end entry">
                <div className="col col-md-12">
                    <h3 style={{marginBottom: '1rem'}}>{this.props.content.title}</h3>
                    <SkillBar skills={this.props.content.bullets} />
                </div>
            </div>
        )
    }
}

class Section extends React.Component {
    render() {
        let entries = this.props.entries.map(entry => <Entry key={entry.id} content={entry}/>)
        
        return (
            <div className="container-fluid section" id={this.props.title.toLowerCase()}>
                <h2 className="section-title"><span style={{borderBottom: '3px solid #000', paddingBottom: '3px'}}>{this.props.title.slice(0, 2)}</span>{this.props.title.slice(2)}</h2>
                <div className="section-entries">{entries}</div>
            </div>
        )
    }
}

export default Section