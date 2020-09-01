import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import DivineToll from '../abilities/DivineToll.png';
import AshenHallow from '../abilities/AshenHallow.png';
import VanquishersHammer from '../abilities/VanquishersHammer.png';
import Blessing from '../abilities/Blessing.png';



function Paladin() {
    return (
      <Router>
      <div className="App">
        <h2> Paladin Abilities</h2>
        
        
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=304971/divine-toll" target="_blank">
        <img className="abil" src={DivineToll}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=316958/ashen-hallow" target="_blank">
        <img className="abil" src={AshenHallow}>
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
        <a href="https://shadowlands.wowhead.com/spell=328204/vanquishers-hammer" target="_blank">
        <img className="abil" src={VanquishersHammer}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://www.wowhead.com/guides/paladin-covenant-abilities-shadowlands" target="_blank">
        <img className="abil" src={Blessing}>
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
  
  export default Paladin;