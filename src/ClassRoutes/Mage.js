import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Spark from '../abilities/Spark.png';
import Mirror from '../abilities/Mirror.png';
import Deathborne from '../abilities/Deathborne.png';
import ShiftingPower from '../abilities/ShiftingPower.png';



function Mage() {
    return (
      <Router>
      <div className="App">
        <h2> Mage Abilities</h2>

        
        
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=307443/radiant-spark" target="_blank">
        <img className="abil" src={Spark}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=314793/mirrors-of-torment" target="_blank">
        <img className="abil" src={Mirror}>
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
        <a href="https://shadowlands.wowhead.com/spell=324220/deathborne" target="_blank">
        <img className="abil" src={Deathborne}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=314791/shifting-power" target="_blank">
        <img className="abil" src={ShiftingPower}>
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
  
  export default Mage;