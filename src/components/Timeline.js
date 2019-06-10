import React from 'react'

function timelineBlobs(data) {
	let entries = []
	let minYear = new Date().getFullYear()
	let maxYear = 0
  
	for (let section in data) {
	  for (let entry of data[section]) {
		if ((entry.from || entry.to) < minYear) {minYear = entry.from || entry.to}
		if ((entry.to || entry.from) > maxYear) {maxYear = entry.to || entry.from}
		let ans = {...entry}
		ans.section = section
		entries.push(ans)
	  }
	}
	
	let fullPeriod = maxYear - minYear
  
	for (let entry of entries) {
	  entry.to = entry.to || maxYear
	  entry.from = entry.from || entry.to
	  entry.yRatio = 100 * (entry.from - minYear) / fullPeriod
	  entry.lengthRatio = 100 * (entry.to - entry.from) / fullPeriod
	  entry.widthRatio = 4 * Math.log(fullPeriod / (entry.to - entry.from))
	}
  
	return entries
} 

class Box extends React.Component {
	render() {
		let {id, section} = this.props.blob
		return <div className={`box ${section}`} id={id} style={this.props.style}></div>
	}
}

class Timeline extends React.Component {
	render() {
		let ans = []
		let {sections, colRatio=2/12, timelineOffset=30} = this.props
		let blobs = timelineBlobs(sections)
		const timelineHeight = window.innerHeight - 2 * timelineOffset
		const timelineX = window.innerWidth * colRatio / 2

		for (let [index, blob] of blobs.entries()) {
			let style = {
			position: 'fixed',
			left: `${timelineX - (blob.widthRatio / 100 * timelineHeight)}px`,
			bottom: `${blob.yRatio / 100 * timelineHeight + timelineOffset}px`,
			height: `${blob.lengthRatio / 100 * timelineHeight}px`,
			width: `${blob.widthRatio / 100 * timelineHeight}px`,
			opacity: blob.id == this.props.activeId? '0.8': '0.2'}

			if (!blob.lengthRatio) {
				style.bottom = `${parseFloat(style.bottom.slice(0, -2)) - timelineHeight / 50}px`
				style.left = `${timelineX - (timelineHeight / 50)}px`
				style.height = `${timelineHeight / 25}px`
				style.width = `${timelineHeight / 25}px`
				style.borderRadius = '50%'
			}

			ans.push(<Box key={index} style={style} blob={blob}/>)
		}

		return <div className="timeline">{ans}</div>
	}
}

export default Timeline;