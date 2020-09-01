import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import VesperTotem from '../abilities/VesperTotem.png';
import ChainHarvest from '../abilities/ChainHarvest.png';
import PrimordialWave from '../abilities/PrimordialWave.png';
import FaeTransfusion from '../abilities/FaeTransfusion.png';


function Shaman() {
    return (
      <Router>
      <div className="App">
        <h2> Shaman Abilities</h2>
        
        
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=324386/vesper-totem" target="_blank">
        <img className="abil" src={VesperTotem}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=320674/chain-harvest" target="_blank">
        <img className="abil" src={ChainHarvest}>
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
        <a href="https://shadowlands.wowhead.com/spell=326059/primordial-wave" target="_blank">
        <img className="abil" src={PrimordialWave}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=328923/fae-transfusion" target="_blank">
        <img className="abil" src={FaeTransfusion}>
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
  
  export default Shaman;