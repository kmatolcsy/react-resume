import React from 'react'
import profile from './profile.jpeg'

class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid section">
                <div className="row align-items-end header">
                    <div className="col col-lg-4">
                        <img src={profile} alt="profile" style={{height: '20rem'}}/>
                    </div>
                    <div className="col col-lg-8 header-content">
                        <p style={{fontSize: '20px'}}>Hello, my name is</p>
                        <h1 stlye={{textAlign: 'center'}}>KRISTOF MATOLCSY</h1>
                        <p style={{textAlign: 'justify', fontSize: '1rem'}}>I was born and raised in Hungary, where I did a bachelor in mathematics and a master’s in actuarial and financial mathematics. I am keen on learning new things, I recently took up a study in computer and data science. I used to ski as a semi-professional and was really enjoying it until the combination of an academic study and top sport became too demanding. In Amsterdam, I switched from snow to water: swimming is my biggest passion now.</p>
                        <a href="https://github.com/kmatolcsy/resume/archive/master.zip" role="button" class="btn btn-dark btn-lg">Download my resume</a><a className="btn btn-link btn-lg"> or read further</a>
                    </div>      
                </div>
            </div>
        )
    }
}

export default Header