import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import EchoingReprimand from '../abilities/EchoingReprimand.png';
import Slaughter from '../abilities/Slaghter.png';
import SerratedBoneSpike from '../abilities/SerratedBoneSpike.png';
import Sepsis from '../abilities/Sepsis.png';

function Rogue() {
    return (
      <Router>
      <div className="App">
        <h2> Rogue Abilities</h2>
        <div className="abilFlex">
        <div>
        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=323547/echoing-reprimand" target="_blank">
        <img className="abil" src={EchoingReprimand}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>
        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=323654/slaughter" target="_blank">
        <img className="abil" src={Slaughter}>
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
        <a href="https://shadowlands.wowhead.com/spell=328547/serrated-bone-spike" target="_blank">
        <img className="abil" src={SerratedBoneSpike}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>
        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=328305/sepsis" target="_blank">
        <img className="abil" src={Sepsis}>
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
  
  export default Rogue;