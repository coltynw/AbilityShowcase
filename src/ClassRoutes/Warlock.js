import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import ScouringTithe from '../abilities/ScouringTithe.png';
import ImpendingCatastrophe from '../abilities/ImpendingCatastrophe.png';
import DecimatingBolt from '../abilities/DecimatingBolt.png';
import SoulRot from '../abilities/SoulRot.png';



function Warlock() {
    return (
      <Router>
      <div className="App">
        <h2> Warlock Abilities</h2>
        
        
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=312321/scouring-tithe" target="_blank">
        <img className="abil" src={ScouringTithe}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=321792/impending-catastrophe" target="_blank">
        <img className="abil" src={ImpendingCatastrophe}>
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
        <a href="https://shadowlands.wowhead.com/spell=325289/decimating-bolt" target="_blank">
        <img className="abil" src={DecimatingBolt}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=325640/soul-rot" target="_blank">
        <img className="abil" src={SoulRot}>
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
  
  export default Warlock;