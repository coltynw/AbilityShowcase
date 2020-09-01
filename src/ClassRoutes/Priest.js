import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Boon from '../abilities/Boon.png';
import Mindgames from '../abilities/Mindgames.png';
import UnholyNova from '../abilities/UnholyNova.png';
import FaeGuardians from '../abilities/FaeGuardians.png';


function Priest() {
    return (
      <Router>
      <div className="App">
        <h2> Priest Abilities</h2>
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://ptr.wowhead.com/spell=325013/boon-of-the-ascended" target="_blank">
        <img className="abil" src={Boon}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://ptr.wowhead.com/spell=323673/mindgames" target="_blank">
        <img className="abil" src={Mindgames}>
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
        <a href="https://ptr.wowhead.com/spell=324724/unholy-nova" target="_blank">
        <img className="abil" src={UnholyNova}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://ptr.wowhead.com/spell=327661/fae-guardians" target="_blank">
        <img className="abil" src={FaeGuardians}>
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
  
  export default Priest;