import React from 'react';

class Entry extends React.Component {
	handleMouseEnter = e => this.props.handleEnter(e.currentTarget.id)
	handleMouseLeave = () => this.props.handleLeave()

	render () {
		let {summary, subtitle, id} = this.props.content

		summary = summary? <span>{summary}</span>: null
		subtitle = subtitle? <span style={{fontSize:'1rem', fontWeight:'normal'}}>, {subtitle}</span>: null

	  	return (
		  	<div className="row align-items-end entry" id={id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
			  	<div className="col col-md-11">
					{/* Exception */}
				  	<h5 style={{fontWeight:'bold'}}>{this.props.content.title}{subtitle}</h5>
			  	</div>
			  	<div className="col col-md-1">
				  	<h6 className="entry-period">{this.props.content.to}</h6>
			  	</div>
			  	<div className="col col-md-10">
				  	<p style={{textAlign: 'justify'}}>{summary}</p>
			  	</div>
		  	</div>
		)
	}
}

class Section extends React.Component {
	handleEnter = targetId => this.props.handleEnter(targetId)
  	handleLeave = () => this.props.handleLeave()

  	render () {
		const entries = this.props.entries.map((entry, index) => (<Entry key={index} content={entry} handleEnter={this.handleEnter} handleLeave={this.handleLeave}/>))

		return (
			<div className="container-fluid section" id={this.props.title.toLowerCase()}>
		 		<h2 className="section-title"><span style={{borderBottom: '3px solid #000', paddingBottom: '3px'}}>{this.props.title.slice(0, 2)}</span>{this.props.title.slice(2)}</h2>
		  		<div className="section-entries">{entries}</div>
			</div>
	  	)
  	}
}

export default Section
