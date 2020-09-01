import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SpearOfBastion from '../abilities/SpearOfBastion.png';
import Condemn from '../abilities/Condemn.png';
import ConquerorsBanner from '../abilities/ConquerorsBanner.png';
import AncientAftershock from '../abilities/AncientAftershock.png';


function Warrior() {
    return (
      <Router>
      <div className="App">
        <h2> Warrior Abilities</h2>

        
        
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=307865/spear-of-bastion" target="_blank">
        <img className="abil" src={SpearOfBastion}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=317349/condemn" target="_blank">
        <img className="abil" src={Condemn}>
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
        <a href="https://shadowlands.wowhead.com/spell=324143/conquerors-banner" target="_blank">
        <img className="abil" src={ConquerorsBanner}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=325886/ancient-aftershock" target="_blank">
        <img className="abil" src={AncientAftershock}>
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
  
  export default Warrior;