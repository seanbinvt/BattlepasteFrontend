/*
Default Navbar that utilizes public CSS libraries imported from bootstrap in App.js
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Home</Link>
                <div className="container-fluid">
                    <ul className="navbar-nav nav">
                        <li className="navbar-item">
                            <Link to="/battlepaste" className="nav-link">AE Battlepaste</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}