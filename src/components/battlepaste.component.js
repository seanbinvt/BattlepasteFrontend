import React, { Component } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';


export default class BattlePaste extends Component {

    render() {
        return (
            <div>
                <center>
                    <Link to="/battlepaste/submit" className="nav-link btn btn-primary form-group" style={{ width: "30%", minWidth: "200px"}}>Submit Battle Report</Link>
                    <Link to="/battlepaste/search" className="nav-link btn btn-primary form-group" style={{ width: "30%", minWidth: "200px" }} >Search Battle Report</Link>
                </center>
            </div >
        )
    }
}