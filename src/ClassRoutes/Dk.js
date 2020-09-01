import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import Shackle from '../abilities/Shackle.png';
import SwarmingMist from '../abilities/SwarmingMist.png';
import Abomination from '../abilities/Abomination.png';
import DeathsDue from '../abilities/DeathsDue.png';



function Dk() {
    return (
      <Router>
      <div className="App">
        <h2> Death Knight Abilities</h2>

        
        
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=312202/shackle-the-unworthy" target="_blank">
        <img className="abil" src={Shackle}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=311648/swarming-mist" target="_blank">
        <img className="abil" src={SwarmingMist}>
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
        <a href="https://shadowlands.wowhead.com/spell=315443/abomination-limb" target="_blank">
        <img className="abil" src={Abomination}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=324128/deaths-due" target="_blank">
        <img className="abil" src={DeathsDue}>
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
  
  export default Dk;