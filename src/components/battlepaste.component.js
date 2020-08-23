import React, { Component } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';


export default class BattlePaste extends Component {

    render() {
        return (
            <div>
                                <Helmet>
                        <title>Battlepaste</title>
                    </Helmet>
                <center>
                    <Link to="/battlepaste/submit" className="nav-link btn btn-primary form-group" style={{ width: "30%", minWidth: "207px"}}>Submit Battle Report</Link>
                    <Link to="/battlepaste/search" className="nav-link btn btn-primary form-group" style={{ width: "30%", minWidth: "207px" }} >Search Battle Report</Link>
                </center>
            </div >
        )
    }
}