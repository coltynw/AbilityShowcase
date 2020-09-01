import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import Resonating from '../abilities/Resonating.png';
import Flayed from '../abilities/Flayed.png';
import DeathChakram from '../abilities/DeathChakram.png';
import WildSpirits from '../abilities/WildSpirits.png';



function Hunter() {
    return (
      <Router>
      <div className="App">
        <h2> Hunter Abilities</h2>

        
        
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=308491/resonating-arrow" target="_blank">
        <img className="abil" src={Resonating}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=324149/flayed-shot" target="_blank">
        <img className="abil" src={Flayed}>
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
        <a href="https://shadowlands.wowhead.com/spell=325028/death-chakram" target="_blank">
        <img className="abil" src={DeathChakram}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=328231/wild-spirits" target="_blank">
        <img className="abil" src={WildSpirits}>
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
  
  export default Hunter;