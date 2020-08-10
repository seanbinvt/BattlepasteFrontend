import React, { Component } from 'react';
import axios from 'axios';


/*
This page is a page that allows the user to select a given country and information type from drop downs.

Will redirect to localhost/country/:country/:information
*/
export default class SubmitBattlePaste extends Component {
    constructor(props) {
        super(props);
        this.onChangeInfo = this.onChangeInfo.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            data: ''
        }
    }

    componentDidMount() {

    }

    onChangeInfo(e) {
        this.setState({
            data: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post('https://battlepasteapi.herokuapp.com/battlereport/submit', {
            battlePaste: this.state.data
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
                            <textarea required onChange={this.onChangeInfo} rows="25" cols="50" />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit" className="btn btn-primary" />
                        </div>
                    </form>
                </center>
            </div >
        )
    }
}