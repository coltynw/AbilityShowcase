import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import Elysian from '../abilities/Elysian.png';
import SinfulBrand from '../abilities/SinfulBrand.png';
import Fodder from '../abilities/Fodder.png';
import TheHunt from '../abilities/TheHunt.png';




function Dh() {
    return (
      <Router>
      <div className="App">
        <h2> Demon Hunter Abilities</h2>

        
        
        <div className="abilFlex">
        <div>

        <h3>Kyrian</h3>
        <div class="tooltip2">
        <a href="https://shadowlands.wowhead.com/spell=306830/elysian-decree" target="_blank">
        <img className="abil" src={Elysian}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Venthyr</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=317009/sinful-brand" target="_blank">
        <img className="abil" src={SinfulBrand}>
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
        <a href="https://shadowlands.wowhead.com/spell=329554/fodder-to-the-flame" target="_blank">
        <img className="abil" src={Fodder}>
        </img>
        <span class="tooltiptext2">Click to to go WowHead</span>
        </a>
        </div>
        </div>
        <div>

        <h3>Night Fae</h3>
        <div class="tooltip">
        <a href="https://shadowlands.wowhead.com/spell=323639/the-hunt" target="_blank">
        <img className="abil" src={TheHunt}>
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
  
  export default Dh;