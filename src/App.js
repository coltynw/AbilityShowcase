import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Dk from './ClassRoutes/Dk.js';
import Dh from './ClassRoutes/Dh.js';
import Druid from './ClassRoutes/Druid.js';
import Hunter from './ClassRoutes/Hunter.js';
import Mage from './ClassRoutes/Mage.js';
import Monk from './ClassRoutes/Monk.js';
import Paladin from './ClassRoutes/Paladin.js';
import Priest from './ClassRoutes/Priest.js';
import Rogue from './ClassRoutes/Rogue.js';
import Shaman from './ClassRoutes/Shaman.js';
import Warlock from './ClassRoutes/Warlock.js';
import Warrior from './ClassRoutes/Warrior.js';

import dk from './assests/death_knight.jpg';
import dh from './assests/demon_hunter.jpg';
import druid from './assests/druid.jpg';
import hunter from './assests/hunter.jpg';
import mage from './assests/mage.jpg';
import monk from './assests/monk.jpg';
import paladin from './assests/paladin.jpg';
import priest from './assests/priest.jpg';
import rogue from './assests/rogue.jpg';
import shaman from './assests/shaman.jpg';
import warlock from './assests/warlock.jpg';
import warrior from './assests/warrior.jpg';

import Kyrian from './assests/Kyrian_Sigil.png';
import Venthyr from './assests/Venthyr_Sigil.png';
import NecroLord from './assests/Death_Lords_Sigil.png';
import NightFae from './assests/Fae_Sigil.png';





function App() {
  return (
    <Router>
    <div className="App">
      <Link to='/'>
      <div class="tooltip1">
      <h1> Covenant Ability Displayer</h1>
      <span class="tooltiptext1">Click to go to Homepage</span>
  </div>
      </Link> 
      <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route exact={true} path="/Dk" component={Dk}></Route>
      <Route exact={true} path="/Dh" component={Dh}></Route>
      <Route exact={true} path="/Druid" component={Druid}></Route>
      <Route exact={true} path="/Hunter" component={Hunter}></Route>
      <Route exact={true} path="/Mage" component={Mage}></Route>
      <Route exact={true} path="/Monk" component={Monk}></Route>
      <Route exact={true} path="/Paladin" component={Paladin}></Route>
      <Route exact={true} path="/Priest" component={Priest}></Route>
      <Route exact={true} path="/Rogue" component={Rogue}></Route>
      <Route exact={true} path="/Shaman" component={Shaman}></Route>
      <Route exact={true} path="/Warlock" component={Warlock}></Route>
      <Route exact={true} path="/Warrior" component={Warrior}></Route>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
      <div className='icons2'>
  <div class="tooltip1">
  <a href="https://www.wowhead.com/guides/kyrian-covenant-overview-class-abilities-soulbinds-rewards" target="_blank">
  <img className="icon2" src={Kyrian}  alt="Kyrian "></img>
  </a>
  <span class="tooltiptext1"><p>Kyrian</p><p>Click to go to WowHead</p></span>
  </div>

  <div class="tooltip1">
  <a href="https://www.wowhead.com/guides/venthyr-covenant-overview-abilities-soulbinds-rewards" target="_blank">
  <img className="icon2" src={Venthyr}  alt="Venthyr "></img>
  </a>
  <span class="tooltiptext1"><p>Venthyr</p><p>Click to go to WowHead</p></span>
  </div>

  <div class="tooltip1">
  <a href="https://www.wowhead.com/guides/necrolord-covenant-overview-abilities-soulbinds-rewards" target="_blank">
  <img className="icon2" src={NecroLord}  alt="NecroLord "></img>
  </a>
  <span class="tooltiptext1"><p>NecroLord</p><p>Click to go to WowHead</p></span>
  </div>

  <div class="tooltip1">
  <a href="https://www.wowhead.com/guides/night-fae-covenant-overview-abilities-soulbinds-rewards" target="_blank">
  <img className="icon2" src={NightFae}  alt="NightFae "></img>
  </a>
  <span class="tooltiptext1"><p>NightFae</p><p>Click to go to WowHead</p></span>
  </div>

    </div>
  <div className='icons'>
    <Link to='/Dk'>
    <div class="tooltip">
  <img className="icon" src={dk}  alt="Death Knight"></img>
  <span class="tooltiptext"><p>Death Knight</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  <Link to='/Dh'>
  <div class="tooltip">
  <img className="icon" src={dh}  alt="Demon Hunter"></img>
  <span class="tooltiptext"><p>Demon Hunter</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  <Link to='/Druid'>
  <div class="tooltip">
  <img className="icon" src={druid}  alt="Druid "></img>
  <span class="tooltiptext"><p>Druid</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  <Link to='/Hunter'>
  <div class="tooltip2">
  <img className="icon" src={hunter}  alt="Hunter "></img>
  <span class="tooltiptext2"><p>Hunter</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  <Link to='/Mage'>
  <div class="tooltip2">
  <img className="icon" src={mage}  alt="Mage "></img>
  <span class="tooltiptext2"><p>Mage</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  <Link to='/Monk'>
  <div class="tooltip2">
  <img className="icon" src={monk}  alt="Monk "></img>
  <span class="tooltiptext2"><p>Monk</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  </div>
  <div className='icons'>
    <Link to='/Paladin'>
    <div class="tooltip">
  <img className="icon" src={paladin}  alt="Paladin "></img>
  <span class="tooltiptext"><p>Paladin</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  <Link to='/Priest'>
  <div class="tooltip">
  <img className="icon" src={priest}  alt="Priest "></img>
  <span class="tooltiptext"><p>Priest</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  <Link to='/Rogue'>
  <div class="tooltip">
  <img className="icon" src={rogue}  alt="Rogue "></img>
  <span class="tooltiptext"><p>Rogue</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  <Link to='/Shaman'>
  <div class="tooltip2">
  <img className="icon" src={shaman}  alt="Shaman "></img>
  <span class="tooltiptext2"><p>Shaman</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  <Link to='/Warlock'>
  <div class="tooltip2">
  <img className="icon" src={warlock}  alt="Warlock "></img>
  <span class="tooltiptext2"><p>Warlock</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  <Link to='/Warrior'>
  <div class="tooltip2">
  <img className="icon" src={warrior}  alt="Warrior "></img>
  <span class="tooltiptext2"><p>Warrior</p><p>Click to see Abilities</p></span>
  </div>
  </Link>
  </div>


  </div>

);

export default App;
