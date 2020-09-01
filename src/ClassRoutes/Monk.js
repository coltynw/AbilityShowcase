import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import WeaponsOfOrder from '../abilities/WeaponsOfOrder.png';
import FallenOrder from '../abilities/FallenOrder.png';
import BonedustBrew from '../abilities/BonedustBrew.png';
import FaelineStomp from '../abilities/FaelineStomp.png';



function Monk() {
    return (
      <Router>
      <div className="App">
        <h2> Monk Abilities</h2>

        
        
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=310454/weapons-of-order" target="_blank">
        <img className="abil" src={WeaponsOfOrder}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=326860/fallen-order" target="_blank">
        <img className="abil" src={FallenOrder}>
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
        <a href="https://shadowlands.wowhead.com/spell=325216/bonedust-brew" target="_blank">
        <img className="abil" src={BonedustBrew}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=327104/faeline-stomp" target="_blank">
        <img className="abil" src={FaelineStomp}>
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
  
  export default Monk;