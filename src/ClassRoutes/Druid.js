import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Kindred from '../abilities/Kindred.png';
import Ravenous from '../abilities/Ravenous.png';
import Swarm from '../abilities/Swarm.png';
import Convoke from '../abilities/Convoke.png';


function Druid() {
    return (
      <Router>
      <div className="App">
        <h2> Druid Abilities</h2>

        
        
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=326434/kindred-spirits" target="_blank">
        <img className="abil" src={Kindred}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=323546/ravenous-frenzy" target="_blank">
        <img className="abil" src={Ravenous}>
        </img>
        </a>
        <span class="tooltiptext">Click to to go WowHead</span>
        </div>
        </div>
        </div>
        <div className="abilFlex">
        <div>

        <h3>Necro Lords</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=325727/adaptive-swarm" target="_blank">
        <img className="abil" src={Swarm}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=323764/convoke-the-spirits" target="_blank">
        <img className="abil" src={Convoke}>
        </img>
        </a>
        <span class="tooltiptext">Click to to go WowHead</span>
        </div>
        </div>
        </div>
        </div>
      </Router>
    );
  }
  
  export default Druid;