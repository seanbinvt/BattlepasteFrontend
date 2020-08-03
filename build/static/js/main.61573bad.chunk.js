(this["webpackJsonpSeans-Portfolio"]=this["webpackJsonpSeans-Portfolio"]||[]).push([[0],{32:function(e,t,a){e.exports=a(67)},37:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=(a(37),a(12)),s=a(1),m=(a(38),a(39),a(6)),i=a(7),u=a(9),d=a(8),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"Home"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/battlepaste",className:"nav-link"},"AE Battle Paste")))))}}]),a}(n.Component),p=(a(44),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Sean Blevins"),r.a.createElement("h5",null,"Junior Software Developer"),r.a.createElement("br",null),r.a.createElement("div",{className:"homeList"},r.a.createElement("p",null,"Hello, my name is Sean and I am a Computer Software Engineering student. I am interested in doing software development in familiar and unfamiliar fields."),r.a.createElement("p",null,"I am currently looking for employment opportunities. Mainly interested in freelance work and paid Summer internship opportunities. Please direct related offers in the Software Development field to ",r.a.createElement("a",{href:"mailto:sean@seanblevins.net"},"sean@seanblevins.net"),"."),r.a.createElement("p",null,"Please direct less formal discussions, such as software recommendations of any of my current software, to my Discord contact (",r.a.createElement("b",null,"Sean #3307"),")."),r.a.createElement("center",null,r.a.createElement("h5",null,r.a.createElement("a",{href:"https://github.com/seanbinvt"},"Github"))),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("h5",null,"Experience:")),r.a.createElement("ul",{className:"homeList"},r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("b",null,"Environments:")," NodeJS, Android Studio, DiscordJS")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("b",null,"Programming:")," C, Python, Java, JavaScript, Go")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("b",null,"Web:")," HTML/CSS, PHP, JavaScript, SQL, MongoDB, Express, React")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("b",null,"Web Automation:")," Selenium, Puppeteer, Requests")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("b",null,"Version Control:")," Subversion, GitHub")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("b",null,"Other:")," Windows, Linux, Ubuntu, AWS")))))}}]),a}(n.Component)),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(o.b,{to:"/battlepaste/submit",className:"nav-link btn btn-primary form-group",style:{width:"30%"}},"Submit Battle Report"),r.a.createElement(o.b,{to:"/battlepaste/search",className:"nav-link btn btn-primary form-group",style:{width:"30%"}},"Search Battle Report")))}}]),a}(n.Component),b=a(11),f=a(14),v=a.n(f),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChangeInfo=n.onChangeInfo.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n.state={data:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"onChangeInfo",value:function(e){this.setState({data:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),v.a.post("http://battlepasteapi.herokuapp.com/battlereport/search",{"Access-Control-Allow-Origin":"*",battlePaste:this.state.data}).then((function(e,t){t?console.log(t):window.location="/battlepaste/"+e.data.server+"/"+e.data.mongoId}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h3",null,"Submit Battle Report"),r.a.createElement("p",null,'Please paste your battle report starting from "Battle Report" to the very end.'),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{required:!0,onChange:this.onChangeInfo,rows:"25",cols:"50"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary"})))))}}]),a}(n.Component),y=(a(62),function(e){return r.a.createElement("div",null,r.a.createElement("div",null,"The battle report that you trying to access of the specified ID and server does not exist. Please search for it using the search feature or ensure that the link is correct."),r.a.createElement("a",{href:"/battlepaste/search"},"Search Battle Paste"))}),N=function(e){return r.a.createElement("tr",{align:"center"},r.a.createElement("td",null,e.data.Name),r.a.createElement("td",null,r.a.createElement("b",null,e.data.StartQuant)),e.data.EndQuant<e.data.StartQuant&&r.a.createElement("td",{className:"hilite"},r.a.createElement("b",null,e.data.EndQuant)),e.data.EndQuant===e.data.StartQuant&&r.a.createElement("td",null,r.a.createElement("b",null,e.data.EndQuant)),r.a.createElement("td",null,e.data.Power),r.a.createElement("td",null,e.data.Armour),r.a.createElement("td",null,e.data.Shield))},k=function(e){return r.a.createElement("div",{className:"ticker"},r.a.createElement("span",{className:"link"},e.attackerTag," ",e.attacker)," vs. ",r.a.createElement("span",{className:"link"},e.defenderTag," ",e.defender)," losses: ",e.attackLoss.toLocaleString()," / ",e.defendLoss.toLocaleString())},S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isAuthenticating:!0,report:{},error:!1,mongoID:n.props.match.params.id,server:n.props.match.params.server},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://battlepasteapi.herokuapp.com/battlereport/"+this.state.server+"/"+this.state.mongoID,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(t){e.setState({report:t.data,isAuthenticating:!1}),console.log("here")})).catch((function(t){e.setState({error:!0,isAuthenticating:!1}),console.log(t)}))}},{key:"render",value:function(){if(this.state.isAuthenticating)return null;if(this.state.error)return r.a.createElement(y,null);console.log(this.state.error);var e=this.state.report,t=!1,a=!1;!e.BaseAttack&&e.Attacker.OnBase?t=!0:!t&&e.Defender.OnBase&&(a=!0);var n=!1;return"United Colonies"!==e.Attacker.PlayerName&&"Drekons"!==e.Defender.PlayerName||(n=!0),r.a.createElement("div",null,r.a.createElement(k,{attackerTag:e.Attacker.PlayerTag,attacker:e.Attacker.PlayerName,defenderTag:e.Defender.PlayerTag,defender:e.Defender.PlayerName,attackLoss:e.AttackerLoss,defendLoss:e.DefenderLoss}),r.a.createElement("div",{className:"battle-report",align:"center"},r.a.createElement("table",{className:"battle-report_info"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"2"},"Battle Report")),r.a.createElement("tr",null,r.a.createElement("td",null,"Location"),r.a.createElement("td",null,r.a.createElement("div",{className:"link"},e.BaseName," (",e.Coordinate,")"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Time"),r.a.createElement("td",null,e.Date," ",e.Time)),r.a.createElement("tr",null,r.a.createElement("td",null,"Server"),r.a.createElement("td",null,e.Server)),r.a.createElement("tr",{className:"battle-report_subtitle"},r.a.createElement("th",{colSpan:"2"},"Attack Force")),r.a.createElement("tr",null,r.a.createElement("td",null,"Player"),r.a.createElement("td",null,r.a.createElement("div",{className:"link"},e.Attacker.PlayerTag," ",e.Attacker.PlayerName),"\xa0\xa0","United Colonies"!==e.Attacker.PlayerName&&"Drekons"!==e.Attacker.PlayerName&&r.a.createElement("small",null,"lvl ",e.Attacker.PlayerLevel))),r.a.createElement("tr",null,r.a.createElement("td",null,"Fleet Name"),r.a.createElement("td",null,e.Attacker.FleetName," ",e.AttackerDestroyed&&r.a.createElement("b",{className:"hilite"},"(Destroyed)"))),t&&r.a.createElement("tr",null,r.a.createElement("td",null,"Command Centers"),r.a.createElement("td",null,e.CommandCenters)),t&&""!==e.Commander&&r.a.createElement("tr",null,r.a.createElement("td",null,"Commander"),r.a.createElement("td",null,e.Commander)),r.a.createElement("tr",{className:"battle-report_subtitle"},r.a.createElement("th",{colSpan:"2"},"Defensive Force")),r.a.createElement("tr",null,r.a.createElement("td",null,"Player"),r.a.createElement("td",null,r.a.createElement("div",{className:"link"},e.Defender.PlayerTag," ",e.Defender.PlayerName),"\xa0\xa0","United Colonies"!==e.Defender.PlayerName&&"Drekons"!==e.Attacker.PlayerName&&r.a.createElement("small",null,"lvl ",e.Defender.PlayerLevel))),r.a.createElement("tr",null,r.a.createElement("td",null,"Fleet Name"),r.a.createElement("td",null,e.Defender.FleetName," ",e.DefenderDestroyed&&r.a.createElement("b",{className:"hilite"},"(Destroyed)"))),a&&r.a.createElement("tr",null,r.a.createElement("td",null,"Base"),r.a.createElement("td",null,e.BaseID)),a&&r.a.createElement("tr",null,r.a.createElement("td",null,"Start Defenses"),r.a.createElement("td",null,r.a.createElement("b",null,e.StartDefenses,"%"))),a&&r.a.createElement("tr",null,r.a.createElement("td",null,"End Defenses"),r.a.createElement("td",null,r.a.createElement("b",{className:"hilite"},e.EndDefenses,"%"))),a&&r.a.createElement("tr",null,r.a.createElement("td",null,"Command Centers"),r.a.createElement("td",null,e.CommandCenters)),a&&""!==e.Commander&&r.a.createElement("tr",null,r.a.createElement("td",null,"Commander"),r.a.createElement("td",null,e.Commander)))),r.a.createElement("br",null),r.a.createElement("table",{className:"battle-report_attack"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"6"},"Attack Force")),r.a.createElement("tr",null,r.a.createElement("th",null,"Unit"),r.a.createElement("th",null,"Start Quant."),r.a.createElement("th",null,"End Quant."),r.a.createElement("th",null,"Power"),r.a.createElement("th",null,"Armour"),r.a.createElement("th",null,"Shield")),e.AttackerUnits.map((function(e){return r.a.createElement(N,{data:e,key:"Attacker"+e.Name})})))),r.a.createElement("br",null),r.a.createElement("table",{className:"battle-report_defense"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"6"},"Defensive Force")),r.a.createElement("tr",null,r.a.createElement("th",null,"Unit"),r.a.createElement("th",null,"Start Quant."),r.a.createElement("th",null,"End Quant."),r.a.createElement("th",null,"Power"),r.a.createElement("th",null,"Armour"),r.a.createElement("th",null,"Shield")),e.DefenderUnits&&e.DefenderUnits.map((function(e){return r.a.createElement(N,{data:e,key:"Defender"+e.Name})})))),r.a.createElement("br",null),r.a.createElement("center",null,"Total cost of units destroyed: ",e.TotalLoss," ",r.a.createElement("small",null,"( Attacker: ",e.AttackerLoss," ; Defender: ",e.DefenderLoss," )")),!n&&r.a.createElement("center",null,r.a.createElement("small",null,"Experience: ( Attacker: +",e.AttackerExp," ; Defender: +",e.DefenderExp," )")),r.a.createElement("center",null,"New debris in space: ",e.DebrisGen),e.BaseConquer&&r.a.createElement("center",{className:"hilite"},"Attacker conquered the base.",r.a.createElement("br",null)),e.BaseAttack&&!e.BaseConquer&&r.a.createElement("center",{className:"important"},"Attacker failed to conquer the base",r.a.createElement("br",null)),e.CommanderKilled&&r.a.createElement("center",{className:"hilite"},"Commander ",e.Commander," was killed",r.a.createElement("br",null)),e.BaseAttack&&e.BasePillaged&&r.a.createElement("center",{className:"hilite"},"Attacker got ",e.BasePillage," credits for pillaging defender's base.")))}}]),a}(n.Component),C=(a(63),a(64),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={reports:[],player:"",minFleet:0,server:"Antares",coordinate:"",error:!1,searched:!1},n.onChangePlayer=n.onChangePlayer.bind(Object(b.a)(n)),n.onChangeCoordinate=n.onChangeCoordinate.bind(Object(b.a)(n)),n.onChangeServer=n.onChangeServer.bind(Object(b.a)(n)),n.onFleetChange=n.onFleetChange.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n}return Object(i.a)(a,[{key:"onChangeServer",value:function(e){this.setState({server:e.target.value})}},{key:"onChangePlayer",value:function(e){this.setState({player:e.target.value})}},{key:"onChangeCoordinate",value:function(e){this.setState({coordinate:e.target.value})}},{key:"onFleetChange",value:function(e){""===e.target.value||/^[0-9\b]+$/.test(e.target.value)?this.setState({minFleet:parseInt(e.target.value)}):0!==this.state.minFleet&&this.setState({minFleet:0})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.state.coordinate[0]===this.state.server[0]||""===this.state.coordinate?(console.log("here"),v.a.post("http://battlepasteapi.herokuapp.com/battlereport/search",{"Access-Control-Allow-Origin":"*",server:this.state.server,coordinate:this.state.coordinate,minTotalLoss:this.state.minFleet,playerName:this.state.player}).then((function(e,a){a?(t.setState({error:!0}),console.log(a)):null!==e.data?t.setState({searched:!0,error:!1,reports:e.data}):t.setState({reports:[]})}))):console.log("Invalid coordinate for server")}},{key:"render",value:function(){var e=["Antares","Ares","Nexus","Mystic","Lynx","Kepler","Jade","Iridium","Hydra","Gaia","Frontier","Elysium","Drako","Centauri","Bravo","Andromeda","Utopia","Typhon","Sigma","Rigel","Quantum","Pegasus","Omega","Nova","Mira","Lyra","Kappa","Juno","Ixion","Helion","Gamma","Fenix","Epsilon","Delta","Ceti","Beta","Alpha"];return r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"BattlePaste Search"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-group container-search"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text text-center"},r.a.createElement("b",null,"Server*:"))),r.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect1",onChange:this.onChangeServer},e.map((function(e){return r.a.createElement("option",{value:e},e)})))),r.a.createElement("div",{className:"input-group container-search"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text text-center"},"Coordinate:")),r.a.createElement("input",{type:"text",className:"form-control",maxLength:"12",placeholder:this.state.server[0]+"xx:xx:xx:xx",onChange:this.onChangeCoordinate})),r.a.createElement("div",{className:"input-group container-search"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text text-center"},"Player Name:")),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",onChange:this.onChangePlayer})),r.a.createElement("div",{className:"input-group container-search"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text text-center"},"Min Fleet Destroyed:")),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"0",onChange:this.onFleetChange})),r.a.createElement("button",{className:"btn-primary btn btn-primary form-group",type:"submit",style:{width:"100px"}},"Search")),r.a.createElement("div",{className:"tickers"},this.state.searched&&null!=this.state.reports.length&&this.state.reports.map((function(e){return r.a.createElement(A,{report:e,key:e._id})}))))}}]),a}(n.Component)),A=function(e){return r.a.createElement("a",{href:"/battlepaste/"+e.report.Server+"/"+e.report._id,className:"row"}," ",r.a.createElement("div",{className:"ticker"},r.a.createElement("span",{className:"link"},e.report.Attacker.PlayerTag," ",e.report.Attacker.PlayerName)," vs. ",r.a.createElement("span",{className:"link"},e.report.Defender.PlayerTag," ",e.report.Defender.PlayerName)," losses: ",e.report.AttackerLoss.toLocaleString()," / ",e.report.DefenderLoss.toLocaleString()))};var D=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement("br",null),r.a.createElement(s.a,{path:"/",exact:!0,component:p}),r.a.createElement(s.a,{path:"/battlepaste",exact:!0,component:h}),r.a.createElement(s.a,{path:"/battlepaste/submit",exact:!0,component:g}),r.a.createElement(s.a,{path:"/battlepaste/:server/:id",exact:!0,component:S}),r.a.createElement(s.a,{path:"/battlepaste/search",exact:!0,component:C})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.61573bad.chunk.js.map