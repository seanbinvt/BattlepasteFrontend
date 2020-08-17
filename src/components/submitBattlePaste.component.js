import React, { Component } from 'react';
import axios from 'axios';


/*
This page is a page that allows the user to select a given country and information type from drop downs.

Will redirect to localhost/country/:country/:information
*/
export default class SubmitBattlePaste extends Component {
    API_ENDPOINT = process.env.REACT_APP_API_PATH || 'https://battlepasteapi.herokuapp.com';
    constructor(props) {
        super(props);
        this.onChangeInfo = this.onChangeInfo.bind(this)
        this.onChangeDays = this.onChangeDays.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            data: '',
            days: 0
        }
    }

    componentDidMount() {

    }

    onChangeInfo(e) {
        this.setState({
            data: e.target.value,
        })
    }

    // Only changes the state for proper whole numbers and back to 0 on unproper input
    onChangeDays(e) {
        const re = /^[0-9\b]+$/;
        // if value is not blank, then test the regex
        if (re.test(e.target.value)) {
            this.setState({ days: parseInt(e.target.value) })
        } else if (this.state.days !== 0 || e.target.value === '') {
            this.setState({ days: 0 })
        }
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post(this.API_ENDPOINT + '/battlereport/submit', {
            battlePaste: this.state.data,
            days: this.state.days
        }).then(function (response, error) {
            if (error) {
                console.log(error)
            } else {
                window.location = '/battlepaste/' + response.data.server + '/' + response.data.mongoId
            }
        })

    }

    render() {
        return (
            <div>
                <center>
                    <h3>Submit Battle Report</h3>
                    <p>Please paste your battle report starting from "Battle Report" to the very end.</p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <textarea required onChange={this.onChangeInfo} rows="25" cols="50" style={{ width: "100%", maxWidth: "450px"}}/>
                        </div>
                        <h6 className="row" style={{lineHeight: "30px", width: "max-content"}}>Hide fleet technology for 
                            <input type="text" onChange={this.onChangeDays} maxLength="3" placeholder="0" style={{maxWidth: "50px", fontSize: "inherit", marginLeft: "5px", marginRight: "5px"}} /> 
                            days. 
                        </h6>
                        <div className="form-group">
                            <input type="submit" value="Submit" className="btn btn-primary"/>
                        </div>
                    </form>
                </center>
            </div >
        )
    }
}