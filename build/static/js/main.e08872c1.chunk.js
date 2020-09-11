(this["webpackJsonpSean-Portfolio"]=this["webpackJsonpSean-Portfolio"]||[]).push([[0],{144:function(e,t,a){e.exports=a(453)},148:function(e,t,a){},150:function(e,t,a){},155:function(e,t,a){},172:function(e,t,a){},449:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),o=(a(148),a(33)),m=a(4),s=(a(149),a(150),a(16)),i=a(17),u=a(19),d=a(18),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},l.a.createElement(o.b,{to:"/",className:"navbar-brand"},"Home"),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("ul",{className:"navbar-nav nav"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement(o.b,{to:"/battlepaste",className:"nav-link"},"AE Battlepaste")))))}}]),a}(n.Component),p=a(26),h=(a(155),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement("title",null,"Sean - Portfolio")),l.a.createElement("h4",null,"Sean B."),l.a.createElement("h5",null,"Junior Software Developer"),l.a.createElement("br",null),l.a.createElement("div",{className:"homeList"},l.a.createElement("p",null,"Hello, my name is Sean and I am a Computer Software Engineering student. I am interested in doing software development in familiar and unfamiliar fields."),l.a.createElement("p",null,"I am currently looking for employment opportunities in; freelance work, paid Summer internship opportunities, and post-graduation employment opportunities. Please direct related offers in the Software Development field to ",l.a.createElement("a",{href:"mailto:seanbsoftwaredev@gmail.com"},"SeanBSoftwareDev@gmail.com"),"."),l.a.createElement("p",null,"Please direct less formal discussions, such as software recommendations of any of my current software, to my Discord contact (",l.a.createElement("b",null,"Sean #3307"),")."),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("h5",null,"Experience:")),l.a.createElement("ul",{className:"homeList"},l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("b",null,"Environments:")," NodeJS, Android Studio, DiscordJS")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("b",null,"Programming:")," C, Python, Java, JavaScript, Go")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("b",null,"Web:")," HTML/CSS, PHP, JavaScript, Express, React")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("b",null,"Database:")," SQL, MongoDB")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("b",null,"Web Automation:")," Selenium, Puppeteer, Requests")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("b",null,"Version Control:")," Subversion, GitHub")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("b",null,"Other:")," Windows, Linux, Ubuntu, AWS")))))}}]),a}(n.Component)),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement("title",null,"Battlepaste")),l.a.createElement("center",null,l.a.createElement(o.b,{to:"/battlepaste/submit",className:"nav-link btn btn-primary form-group",style:{width:"30%",minWidth:"207px"}},"Submit Battle Report"),l.a.createElement(o.b,{to:"/battlepaste/search",className:"nav-link btn btn-primary form-group",style:{width:"30%",minWidth:"207px"}},"Search Battle Report")))}}]),a}(n.Component),f=a(20),v=a(44),g=a.n(v),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).API_ENDPOINT="http://localhost:8080",n.onChangeInfo=n.onChangeInfo.bind(Object(f.a)(n)),n.onChangeDays=n.onChangeDays.bind(Object(f.a)(n)),n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n.state={data:"",days:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"onChangeInfo",value:function(e){this.setState({data:e.target.value})}},{key:"onChangeDays",value:function(e){/^[0-9\b]+$/.test(e.target.value)?this.setState({days:parseInt(e.target.value)}):0===this.state.days&&""!==e.target.value||this.setState({days:0})}},{key:"onSubmit",value:function(e){e.preventDefault(),g.a.post(this.API_ENDPOINT+"/battlereport/submit",{battlePaste:this.state.data,days:this.state.days}).then((function(e,t){t?console.log(t):window.location="/battlepaste/"+e.data.server+"/"+e.data.mongoId}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement("title",null,"Submit")),l.a.createElement("center",null,l.a.createElement("h3",null,"Submit Battle Report"),l.a.createElement("p",null,'Please paste your battle report starting from "Battle Report" to the very end.'),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{required:!0,onChange:this.onChangeInfo,rows:"25",cols:"50",style:{width:"100%",maxWidth:"450px"}})),l.a.createElement("h6",{className:"row",style:{lineHeight:"30px",width:"max-content"}},"Hide fleet technology for",l.a.createElement("input",{type:"text",onChange:this.onChangeDays,maxLength:"3",placeholder:"0",style:{maxWidth:"50px",fontSize:"inherit",marginLeft:"5px",marginRight:"5px"}}),"days."),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary"})))))}}]),a}(n.Component),N=(a(172),a(173),function(e){return l.a.createElement("div",null,l.a.createElement("div",null,"The battle report that you trying to access of the specified ID and server does not exist. Please search for it using the search feature or ensure that the link is correct."),l.a.createElement("a",{href:"/battlepaste/search"},"Search Battle Paste"))});function S(e){return 1==e.hide?l.a.createElement("tr",{align:"center"},l.a.createElement("td",null,e.data.Name),l.a.createElement("td",null,l.a.createElement("b",null,e.data.StartQuant)),e.data.EndQuant<e.data.StartQuant&&l.a.createElement("td",{className:"hilite"},l.a.createElement("b",null,e.data.EndQuant)),e.data.EndQuant===e.data.StartQuant&&l.a.createElement("td",null,l.a.createElement("b",null,e.data.EndQuant)),l.a.createElement("td",null,"-"),l.a.createElement("td",null,"-"),l.a.createElement("td",null,"-")):l.a.createElement("tr",{align:"center"},l.a.createElement("td",null,e.data.Name),l.a.createElement("td",null,l.a.createElement("b",null,e.data.StartQuant)),e.data.EndQuant<e.data.StartQuant&&l.a.createElement("td",{className:"hilite"},l.a.createElement("b",null,e.data.EndQuant)),e.data.EndQuant===e.data.StartQuant&&l.a.createElement("td",null,l.a.createElement("b",null,e.data.EndQuant)),l.a.createElement("td",null,e.data.Power),l.a.createElement("td",null,e.data.Armour),l.a.createElement("td",null,e.data.Shield))}var k=function(e){return l.a.createElement("div",{className:"ticker"},l.a.createElement("span",{className:"link"},e.attackerTag," ",e.attacker)," vs. ",l.a.createElement("span",{className:"link"},e.defenderTag," ",e.defender)," losses: ",e.attackLoss.toLocaleString()," / ",e.defendLoss.toLocaleString())},C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).API_ENDPOINT="http://localhost:8080",n.state={isAuthenticating:!0,report:{},error:!1,mongoID:n.props.match.params.id,server:n.props.match.params.server},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get(this.API_ENDPOINT+"/battlereport/"+this.state.server+"/"+this.state.mongoID,{}).then((function(t){e.setState({report:t.data,isAuthenticating:!1})})).catch((function(t){e.setState({error:!0,isAuthenticating:!1}),console.log(t)}))}},{key:"render",value:function(){if(this.state.isAuthenticating)return null;if(this.state.error)return l.a.createElement(N,null);var e=this.state.report,t=!1,a=!1;!e.BaseAttack&&e.Attacker.OnBase?t=!0:!t&&e.Defender.OnBase&&(a=!0);var n=!1;"United Colonies"!==e.Attacker.PlayerName&&"Drekons"!==e.Defender.PlayerName||(n=!0);var r=!1;return 0!=e.AttackerUnits[0].Power&&0!=e.AttackerUnits[0].Armour||(r=!0),l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement("title",null,e.Attacker.PlayerName+" vs. "+e.Defender.PlayerName),l.a.createElement("meta",{property:"og:title",content:"Sean's Battlepaste"}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:url",content:"https://seanb.herokuapp.com/battlepaste/"+this.state.server+"/"+this.state.mongoID}),l.a.createElement("meta",{property:"og:description",content:e.Attacker.PlayerTag+" "+e.Attacker.PlayerName+" vs. "+e.Defender.PlayerTag+" "+e.Defender.PlayerName+" losses: "+e.AttackerLoss.toLocaleString()+" / "+e.DefenderLoss.toLocaleString()}),l.a.createElement("meta",{content:"https://seanb.herokuapp.com/icon.ico",property:"og:image"}),l.a.createElement("meta",{name:"theme-color",content:"#FF0000"}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),l.a.createElement(k,{attackerTag:e.Attacker.PlayerTag,attacker:e.Attacker.PlayerName,defenderTag:e.Defender.PlayerTag,defender:e.Defender.PlayerName,attackLoss:e.AttackerLoss,defendLoss:e.DefenderLoss}),l.a.createElement("div",{className:"battle-report",align:"center"},l.a.createElement("table",{className:"battle-report_info"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},"Battle Report")),l.a.createElement("tr",null,l.a.createElement("td",null,"Location"),l.a.createElement("td",null,l.a.createElement("div",{className:"link"},e.BaseName," (",e.Coordinate,")"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Time"),l.a.createElement("td",null,e.Date," ",e.Time)),l.a.createElement("tr",null,l.a.createElement("td",null,"Server"),l.a.createElement("td",null,e.Server)),l.a.createElement("tr",{className:"battle-report_subtitle"},l.a.createElement("th",{colSpan:"2"},"Attack Force")),l.a.createElement("tr",null,l.a.createElement("td",null,"Player"),l.a.createElement("td",null,l.a.createElement("div",{className:"link"},e.Attacker.PlayerTag," ",e.Attacker.PlayerName),"\xa0\xa0","United Colonies"!==e.Attacker.PlayerName&&"Drekons"!==e.Attacker.PlayerName&&l.a.createElement("small",null,"lvl ",e.Attacker.PlayerLevel))),l.a.createElement("tr",null,l.a.createElement("td",null,"Fleet Name"),l.a.createElement("td",null,e.Attacker.FleetName," ",e.AttackerDestroyed&&l.a.createElement("b",{className:"hilite"},"(Destroyed)"))),t&&l.a.createElement("tr",null,l.a.createElement("td",null,"Command Centers"),l.a.createElement("td",null,e.CommandCenters)),t&&""!==e.Commander&&l.a.createElement("tr",null,l.a.createElement("td",null,"Commander"),l.a.createElement("td",null,e.Commander)),l.a.createElement("tr",{className:"battle-report_subtitle"},l.a.createElement("th",{colSpan:"2"},"Defensive Force")),l.a.createElement("tr",null,l.a.createElement("td",null,"Player"),l.a.createElement("td",null,l.a.createElement("div",{className:"link"},e.Defender.PlayerTag," ",e.Defender.PlayerName),"\xa0\xa0","United Colonies"!==e.Defender.PlayerName&&"Drekons"!==e.Attacker.PlayerName&&l.a.createElement("small",null,"lvl ",e.Defender.PlayerLevel))),l.a.createElement("tr",null,l.a.createElement("td",null,"Fleet Name"),l.a.createElement("td",null,e.Defender.FleetName," ",e.DefenderDestroyed&&l.a.createElement("b",{className:"hilite"},"(Destroyed)"))),a&&l.a.createElement("tr",null,l.a.createElement("td",null,"Base"),l.a.createElement("td",null,e.BaseID)),a&&l.a.createElement("tr",null,l.a.createElement("td",null,"Start Defenses"),l.a.createElement("td",null,l.a.createElement("b",null,e.StartDefenses,"%"))),a&&l.a.createElement("tr",null,l.a.createElement("td",null,"End Defenses"),l.a.createElement("td",null,l.a.createElement("b",{className:"hilite"},e.EndDefenses,"%"))),a&&l.a.createElement("tr",null,l.a.createElement("td",null,"Command Centers"),l.a.createElement("td",null,e.CommandCenters)),a&&""!==e.Commander&&l.a.createElement("tr",null,l.a.createElement("td",null,"Commander"),l.a.createElement("td",null,e.Commander)))),l.a.createElement("br",null),l.a.createElement("table",{className:"battle-report_attack"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"6"},"Attack Force")),l.a.createElement("tr",null,l.a.createElement("th",null,"Unit"),l.a.createElement("th",null,"Start Quant."),l.a.createElement("th",null,"End Quant."),l.a.createElement("th",null,"Power"),l.a.createElement("th",null,"Armour"),l.a.createElement("th",null,"Shield")),e.AttackerUnits.map((function(e){return l.a.createElement(S,{data:e,hide:r,key:"Attacker"+e.Name})})))),l.a.createElement("br",null),l.a.createElement("table",{className:"battle-report_defense"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"6"},"Defensive Force")),l.a.createElement("tr",null,l.a.createElement("th",null,"Unit"),l.a.createElement("th",null,"Start Quant."),l.a.createElement("th",null,"End Quant."),l.a.createElement("th",null,"Power"),l.a.createElement("th",null,"Armour"),l.a.createElement("th",null,"Shield")),e.DefenderUnits&&e.DefenderUnits.map((function(e){return l.a.createElement(S,{data:e,hide:r,key:"Defender"+e.Name})})))),l.a.createElement("br",null),l.a.createElement("center",null,"Total cost of units destroyed: ",e.TotalLoss," ",l.a.createElement("small",null,"( Attacker: ",e.AttackerLoss," ; Defender: ",e.DefenderLoss," )")),!n&&l.a.createElement("center",null,l.a.createElement("small",null,"Experience: ( Attacker: +",e.AttackerExp," ; Defender: +",e.DefenderExp," )")),l.a.createElement("center",null,"New debris in space: ",e.DebrisGen),e.BaseConquer&&l.a.createElement("center",{className:"hilite"},"Attacker conquered the base.",l.a.createElement("br",null)),e.BaseAttack&&!e.BaseConquer&&l.a.createElement("center",{className:"important"},"Attacker failed to conquer the base",l.a.createElement("br",null)),e.CommanderKilled&&l.a.createElement("center",{className:"hilite"},"Commander ",e.Commander," was killed",l.a.createElement("br",null)),e.BaseAttack&&e.BasePillaged&&l.a.createElement("center",{className:"hilite"},"Attacker got ",e.BasePillage," credits for pillaging defender's base.")))}}]),a}(n.Component),D=(a(449),a(450),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).API_ENDPOINT="http://localhost:8080",n.state={reports:[],player:"",minFleet:0,server:"Babylon",coordinate:"",error:!1,searched:!1},n.onChangePlayer=n.onChangePlayer.bind(Object(f.a)(n)),n.onChangeCoordinate=n.onChangeCoordinate.bind(Object(f.a)(n)),n.onChangeServer=n.onChangeServer.bind(Object(f.a)(n)),n.onFleetChange=n.onFleetChange.bind(Object(f.a)(n)),n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n}return Object(i.a)(a,[{key:"onChangeServer",value:function(e){this.setState({server:e.target.value})}},{key:"onChangePlayer",value:function(e){this.setState({player:e.target.value})}},{key:"onChangeCoordinate",value:function(e){this.setState({coordinate:e.target.value})}},{key:"onFleetChange",value:function(e){""===e.target.value||/^[0-9\b]+$/.test(e.target.value)?this.setState({minFleet:parseInt(e.target.value)}):0!==this.state.minFleet&&this.setState({minFleet:0})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.state.coordinate[0]===this.state.server[0]||""===this.state.coordinate?g.a.post(this.API_ENDPOINT+"/battlereport/search",{server:this.state.server,coordinate:this.state.coordinate,minTotalLoss:this.state.minFleet,playerName:this.state.player}).then((function(e,a){a?(t.setState({error:!0}),console.log(a)):null!==e.data?t.setState({searched:!0,error:!1,reports:e.data}):t.setState({reports:[]})})):console.log("Invalid coordinate for server")}},{key:"render",value:function(){var e=["Babylon","Antares","Ares","Nexus","Mystic","Lynx","Kepler","Jade","Iridium","Hydra","Gaia","Frontier","Elysium","Drako","Centauri","Bravo","Andromeda","Utopia","Typhon","Sigma","Rigel","Quantum","Pegasus","Omega","Nova","Mira","Lyra","Kappa","Juno","Ixion","Helion","Gamma","Fenix","Epsilon","Delta","Ceti","Beta","Alpha"];return l.a.createElement("div",{className:"text-center"},l.a.createElement(p.a,null,l.a.createElement("title",null,"Search")),l.a.createElement("h2",null,"BattlePaste Search"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"input-group container-search"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text text-center"},l.a.createElement("b",null,"Server*:"))),l.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect1",onChange:this.onChangeServer},e.map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement("div",{className:"input-group container-search"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text text-center"},"Coordinate:")),l.a.createElement("input",{type:"text",className:"form-control",maxLength:"12",placeholder:this.state.server[0]+"xx:xx:xx:xx",onChange:this.onChangeCoordinate})),l.a.createElement("div",{className:"input-group container-search"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text text-center"},"Player Name:")),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",onChange:this.onChangePlayer})),l.a.createElement("div",{className:"input-group container-search"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text text-center"},"Min Fleet Destroyed:")),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"0",onChange:this.onFleetChange})),l.a.createElement("button",{className:"btn-primary btn btn-primary form-group",type:"submit",style:{width:"100px"}},"Search")),l.a.createElement("div",{className:"tickers"},this.state.searched&&null!=this.state.reports.length&&this.state.reports.map((function(e){return l.a.createElement(P,{report:e,key:e._id})}))))}}]),a}(n.Component)),P=function(e){return l.a.createElement("a",{href:"/battlepaste/"+e.report.Server+"/"+e.report._id,className:"row"}," ",l.a.createElement("div",{className:"ticker"},l.a.createElement("span",{className:"link"},e.report.Attacker.PlayerTag," ",e.report.Attacker.PlayerName)," vs. ",l.a.createElement("span",{className:"link"},e.report.Defender.PlayerTag," ",e.report.Defender.PlayerName)," losses: ",e.report.AttackerLoss.toLocaleString()," / ",e.report.DefenderLoss.toLocaleString()))};var A=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(E,null),l.a.createElement("br",null),l.a.createElement(m.a,{path:"/",exact:!0,component:h}),l.a.createElement(m.a,{path:"/battlepaste",exact:!0,component:b}),l.a.createElement(m.a,{path:"/battlepaste/submit",exact:!0,component:y}),l.a.createElement(m.a,{path:"/battlepaste/:server/:id",exact:!0,component:C}),l.a.createElement(m.a,{path:"/battlepaste/search",exact:!0,component:D})))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.e08872c1.chunk.js.map