import React, { Component } from 'react';
import axios from 'axios';
import './css/search.css'

import 'bootstrap';

/*
This page is a page that allows the user to select a given country and information type from drop downs.

Will redirect to localhost/country/:country/:information
*/

export default class SearchBattlePaste extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reports: [],
            player: "",
            minFleet: 0,
            server: "Antares",
            coordinate: "",
            error: false,
            searched: false
        }

        this.onChangePlayer = this.onChangePlayer.bind(this)
        this.onChangeCoordinate = this.onChangeCoordinate.bind(this)
        this.onChangeServer = this.onChangeServer.bind(this)
        this.onFleetChange = this.onFleetChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeServer(e) {
        this.setState({
            server: e.target.value
        })
    }

    onChangePlayer(e) {
        this.setState({
            player: e.target.value
        })
    }

    onChangeCoordinate(e) {
        this.setState({
            coordinate: e.target.value
        })
    }

    // Only changes the state for proper whole numbers and back to 0 on unproper input
    onFleetChange(e) {
        const re = /^[0-9\b]+$/;

        // if value is not blank, then test the regex
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ minFleet: parseInt(e.target.value) })
        } else if (this.state.minFleet !== 0) {
            this.setState({ minFleet: 0 })
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if ((this.state.coordinate[0] === this.state.server[0]) || this.state.coordinate === "") {
            console.log('here')
            axios.post('https://battlepasteapi.herokuapp.com/battlereport/search', {
                "Access-Control-Allow-Origin": "*",
                server: this.state.server,
                coordinate: this.state.coordinate,
                minTotalLoss: this.state.minFleet,
                playerName: this.state.player
            }).then((response, error) => {
                if (error) {
                    this.setState({
                        error: true
                    })
                    console.log(error)
                } else if (response.data !== null) {
                    this.setState({
                        searched: true,
                        error: false,
                        reports: response.data,
                    })
                } else {
                    this.setState({
                        reports: [],
                    })
                }
            })
        } else {
            console.log("Invalid coordinate for server")
        }
    }

    render() {
        const servers = ["Antares", "Ares", "Nexus", "Mystic", "Lynx", "Kepler", "Jade", "Iridium", "Hydra", "Gaia", "Frontier", "Elysium", "Drako", "Centauri", "Bravo", "Andromeda",
            "Utopia", "Typhon", "Sigma", "Rigel", "Quantum", "Pegasus", "Omega", "Nova", "Mira", "Lyra", "Kappa", "Juno", "Ixion", "Helion", "Gamma", "Fenix", "Epsilon", "Delta", "Ceti", "Beta", "Alpha"]

        var Data = servers,
            MakeItem = function (server) {
                return <option value={server}>{server}</option>;
            };

        return (
            <div className="text-center">
                <h2>BattlePaste Search</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="input-group container-search">
                        <div className="input-group-prepend">
                            <span className="input-group-text text-center"><b>Server*:</b></span>
                        </div>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={this.onChangeServer}>
                            {Data.map(MakeItem)}
                        </select>
                    </div>
                    <div className="input-group container-search">
                        <div className="input-group-prepend">
                            <span className="input-group-text text-center">Coordinate:</span>
                        </div>
                        <input type="text" className="form-control" maxLength="12" placeholder={this.state.server[0] + "xx:xx:xx:xx"} onChange={this.onChangeCoordinate} />
                    </div>
                    <div className="input-group container-search">
                        <div className="input-group-prepend">
                            <span className="input-group-text text-center">Player Name:</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Name" onChange={this.onChangePlayer} />
                    </div>
                    <div className="input-group container-search">
                        <div className="input-group-prepend">
                            <span className="input-group-text text-center">Min Fleet Destroyed:</span>
                        </div>
                        <input type="text" className="form-control" placeholder="0" onChange={this.onFleetChange} />
                    </div>
                    <button className="btn-primary btn btn-primary form-group" type="submit" style={{ width: "100px" }}>Search</button>
                </form>
                <div className="tickers">{this.state.searched && this.state.reports.length != null && this.state.reports.map((report) => {
                    return <Ticker report={report} key={report._id} />
                })
                }</div>
            </div >
        )
    }
}

const Ticker = props => (
    <a href={'/battlepaste/' + props.report.Server + '/' + props.report._id} className="row"> <div className="ticker"><span className="link">{props.report.Attacker.PlayerTag} {props.report.Attacker.PlayerName}</span> vs. <span className="link">{props.report.Defender.PlayerTag} {props.report.Defender.PlayerName}</span> losses: {(props.report.AttackerLoss).toLocaleString()} / {(props.report.DefenderLoss).toLocaleString()}</div ></a >
)

