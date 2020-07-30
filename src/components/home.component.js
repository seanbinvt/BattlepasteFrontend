import React, { Component } from 'react';

import "./css/home.css"

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <h4>Sean Blevins</h4>
                <h5>Junior Software Developer</h5>
                <br />
                <div className="homeList">
                    <p>Hello, my name is Sean and I am a Computer Software Engineering student. I am interested in doing software development in familiar and unfamiliar fields.</p>

                    <p>I am currently looking for employment opportunities. Mainly interested in freelance work and paid Summer internship opportunities. Please direct related offers in the Software Development field to <a href="mailto:sean@seanblevins.net">sean@seanblevins.net</a>.</p>

                    <p>Please direct less formal discussions, such as software recommendations of any of my current software, to my Discord contact (<b>Sean #3307</b>).</p>

                    <center>
                        <h5><a href="https://github.com/seanbinvt">Github</a></h5>
                    </center>
                    <br />
                    <center>
                        <h5>Experience:</h5>
                    </center>
                    <ul className="homeList">
                        <li>
                            <p><b>Environments:</b> NodeJS, Android Studio, DiscordJS</p>
                        </li>
                        <li>
                            <p><b>Programming:</b> C, Python, Java, JavaScript, Go</p>
                        </li>
                        <li>
                            <p><b>Web:</b> HTML/CSS, PHP, JavaScript, SQL, MongoDB, Express, React</p>
                        </li>
                        <li>
                            <p><b>Web Automation:</b> Selenium, Puppeteer, Requests</p>
                        </li>
                        <li>
                            <p><b>Version Control:</b> Subversion, GitHub</p>
                        </li>
                        <li>
                            <p><b>Other:</b> Windows, Linux, Ubuntu, AWS</p>
                        </li>
                    </ul>
                </div>

            </div >
        );
    }
}