import React from 'react'
import FontAwesome from 'react-fontawesome'
import logo from './logo.svg'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: false,
            linkedin: false,
            email: false
        }
    }

    handleEnter = event => {
        let newState = {}
        newState[event.currentTarget.id] = true
        this.setState(newState)
    }

    handleLeave = event => {
        let newState = {}
        newState[event.currentTarget.id] = false
        this.setState(newState)
    }

    render() {
        return (
            <ul style={{listStyle: 'none'}}>
                <li id="location" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                    <FontAwesome spin={this.state.location} fixedWidth name='map-pin' size='2x' />
                    <a style={{fontSize: '1.5rem'}} href="https://www.google.com/maps/place/Amsterdam/@52.3545653,4.7585408,11z/data=!3m1!4b1!4m5!3m4!1s0x47c63fb5949a7755:0x6600fd4cb7c0af8d!8m2!3d52.3679843!4d4.9035614"> Amsterdam, NL</a>
                </li>
                <li id="email" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                    <FontAwesome spin={this.state.email} fixedWidth name='envelope' size='2x' />
                    <a style={{fontSize: '1.5rem'}} href="mailto:kmtlcsy@gmail.com"> kmtlcsy@gmail.com</a>
                </li>
                <li id="linkedin" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                    <FontAwesome spin={this.state.linkedin} fixedWidth name='linkedin' size='2x' />
                    <a style={{fontSize: '1.5rem'}} href="https://www.linkedin.com/in/kmtlcsy/"> \kmtlcsy</a>
                </li>
            </ul>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid section">
                <div className="row footer">
                    <div className="col col-lg-6 footer-content footer-left">
                        <h3  className="footer-title">Powered by</h3>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="col col-lg-6 footer-content">
                        <h3 className="footer-title">Find me</h3>
                        <Contact />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
