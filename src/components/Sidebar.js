import React from 'react'
import ScrollSpy from 'react-scrollspy'

class Sidebar extends React.Component {
    render() {
        let ans = []
        for (let section in this.props.sections) {
            ans.push(<li key={section}><a href={`#${section}`}>{section}</a></li>)
        }

        return (
            <div className="sidebar">
                <ScrollSpy items={Object.keys(this.props.sections)} currentClassName="current-section" style={{listStyle: 'none'}}>
                    {ans}
                </ScrollSpy>
            </div>
        )
    }
}

export default Sidebar