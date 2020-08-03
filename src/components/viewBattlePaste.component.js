import React, { Component } from 'react';
import axios from 'axios';
import './css/v2Report.css';

/*
This page is a page that allows the user to select a given country and information type from drop downs.

Will redirect to localhost/country/:country/:information
*/
const Error = props => (
    <div>
        <div>The battle report that you trying to access of the specified ID and server does not exist. Please search for it using the search feature or ensure that the link is correct.</div>
        <a href="/battlepaste/search">Search Battle Paste</a>
    </div>
)

const Unit = props => (
    < tr align="center" >
        <td>{props.data.Name}</td>
        <td><b>{props.data.StartQuant}</b></td>
        {props.data.EndQuant < props.data.StartQuant && <td className="hilite" ><b>{props.data.EndQuant}</b></td>}
        {props.data.EndQuant === props.data.StartQuant && <td><b>{props.data.EndQuant}</b></td>}
        <td>{props.data.Power}</td>
        <td>{props.data.Armour}</td>
        <td>{props.data.Shield}</td>
    </tr >
)

const Ticker = props => (
    <div className="ticker"><span className="link">{props.attackerTag} {props.attacker}</span> vs. <span className="link">{props.defenderTag} {props.defender}</span> losses: {(props.attackLoss).toLocaleString()} / {(props.defendLoss).toLocaleString()}</div >
)


export default class ViewBattlePaste extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticating: true,
            report: {},
            error: false,
            mongoID: this.props.match.params.id,
            server: this.props.match.params.server,
        }
    }

    componentDidMount() {
        axios.get('https://battlepasteapi.herokuapp.com/battlereport/' + this.state.server + '/' + this.state.mongoID, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then((response) => {
                this.setState({ report: response.data, isAuthenticating: false });
                console.log("here")
            })
            .catch((error) => {
                this.setState({ error: true, isAuthenticating: false });
                console.log(error);
            });
    }


    render() {
        if (this.state.isAuthenticating) {
            return (null)
        } else if (this.state.error) {
            return (<Error />)
        } else {
            console.log(this.state.error)
            var r = this.state.report

            var attackerBase = false // If the attacker is on his own base
            var defenderBase = false // If the defender is on his own base

            if (!r.BaseAttack && r.Attacker.OnBase) {
                attackerBase = true
            } else if (!attackerBase && r.Defender.OnBase) {
                defenderBase = true
            }

            var npcAttack = false // If the attack involves an NPC (NPCs give no battle experience)

            if (r.Attacker.PlayerName === "United Colonies" || r.Defender.PlayerName === "Drekons") {
                npcAttack = true
            }

            return (
                <div>
                    <Ticker attackerTag={r.Attacker.PlayerTag} attacker={r.Attacker.PlayerName} defenderTag={r.Defender.PlayerTag} defender={r.Defender.PlayerName} attackLoss={r.AttackerLoss} defendLoss={r.DefenderLoss} />
                    <div className="battle-report" align="center">
                        <table className="battle-report_info">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Battle Report</th>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td><div className={"link"}>{r.BaseName} ({r.Coordinate})</div></td>
                                </tr>
                                <tr>
                                    <td>Time</td>
                                    <td>{r.Date} {r.Time}</td>
                                </tr>
                                <tr>
                                    <td>Server</td>
                                    <td>{r.Server}</td>
                                </tr>
                                <tr className="battle-report_subtitle">
                                    <th colSpan="2">Attack Force</th>
                                </tr>
                                <tr>
                                    <td>Player</td>
                                    <td><div className={"link"}>{r.Attacker.PlayerTag} {r.Attacker.PlayerName}</div>&nbsp;&nbsp;{r.Attacker.PlayerName !== "United Colonies" && r.Attacker.PlayerName !== "Drekons" && <small>lvl {r.Attacker.PlayerLevel}</small>}</td>
                                </tr>
                                <tr>
                                    <td>Fleet Name</td>
                                    <td>{r.Attacker.FleetName} {r.AttackerDestroyed && <b className="hilite">(Destroyed)</b>}</td>
                                </tr>
                                {attackerBase && < tr ><td>Command Centers</td><td>{r.CommandCenters}</td></tr>}
                                {attackerBase && r.Commander !== "" && <tr><td>Commander</td><td>{r.Commander}</td></tr>}
                                <tr className="battle-report_subtitle">
                                    <th colSpan="2">Defensive Force</th>
                                </tr>
                                <tr>
                                    <td>Player</td>
                                    <td><div className={"link"}>{r.Defender.PlayerTag} {r.Defender.PlayerName}</div>&nbsp;&nbsp;{r.Defender.PlayerName !== "United Colonies" && r.Attacker.PlayerName !== "Drekons" && <small>lvl {r.Defender.PlayerLevel}</small>}</td>
                                </tr>
                                <tr>
                                    <td>Fleet Name</td>
                                    <td>{r.Defender.FleetName} {r.DefenderDestroyed && <b className="hilite">(Destroyed)</b>}</td>
                                </tr>
                                {defenderBase && < tr ><td>Base</td><td>{r.BaseID}</td></tr>}
                                {defenderBase && < tr ><td>Start Defenses</td><td><b>{r.StartDefenses}%</b></td></tr>}
                                {defenderBase && < tr ><td>End Defenses</td><td><b className="hilite">{r.EndDefenses}%</b></td></tr>}
                                {defenderBase && < tr ><td>Command Centers</td><td>{r.CommandCenters}</td></tr>}
                                {defenderBase && r.Commander !== "" && <tr><td>Commander</td><td>{r.Commander}</td></tr>}
                            </tbody>
                        </table>
                        <br />
                        <table className="battle-report_attack">
                            <tbody>
                                <tr>
                                    <th colSpan="6">Attack Force</th>
                                </tr>
                                <tr><th>Unit</th><th>Start Quant.</th><th>End Quant.</th><th>Power</th><th>Armour</th><th>Shield</th></tr>
                                {r.AttackerUnits.map(function (item) {
                                    return < Unit data={item} key={"Attacker" + item.Name} />
                                })}
                            </tbody>
                        </table>
                        <br />
                        <table className="battle-report_defense">
                            <tbody>
                                <tr>
                                    <th colSpan="6">Defensive Force</th>
                                </tr>
                                <tr><th>Unit</th><th>Start Quant.</th><th>End Quant.</th><th>Power</th><th>Armour</th><th>Shield</th></tr>
                                {r.DefenderUnits && r.DefenderUnits.map(function (item) {
                                    return <Unit data={item} key={"Defender" + item.Name} />
                                })}
                            </tbody>
                        </table>
                        <br />
                        <center>Total cost of units destroyed: {r.TotalLoss} <small>( Attacker: {r.AttackerLoss} ; Defender: {r.DefenderLoss} )</small></center>
                        {!npcAttack && <center><small>Experience: ( Attacker: +{r.AttackerExp} ; Defender: +{r.DefenderExp} )</small></center>}
                        <center>New debris in space: {r.DebrisGen}</center>
                        {
                            r.BaseConquer &&
                            <center className="hilite">Attacker conquered the base.<br /></center>}
                        {
                            r.BaseAttack && !r.BaseConquer &&
                            <center className="important">Attacker failed to conquer the base<br /></center>
                        }

                        {
                            r.CommanderKilled &&
                            <center className="hilite">Commander {r.Commander} was killed<br /></center>
                        }

                        {r.BaseAttack && r.BasePillaged && <center className="hilite">Attacker got {r.BasePillage} credits for pillaging defender's base.</center>
                        }
                    </div >
                </div >
            )
        }
    }
}

