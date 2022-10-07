import React from 'react';
import Home from './Home';
import Leaderlogin from './Leaderlogin';
import Chart from './Chart';
import Chart2 from './Chart2';
import Members from './Members';
import Navbar from './Navbar';
import Leaderboard from './Leaderboard';
import Contributors from './Contributors';
import Profile from './Profile';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route } from 'react-router-dom';
const App = () => {
    return(
    <>
    <Navbar/>
   <Switch>
   <Route exact path="/" component = {Home} />
    <Route exact path="/leaderlogin" component = {Leaderlogin} />
    <Route exact path="/chart" component = {Chart} />
    <Route exact path="/chart2" component = {Chart2} />
    <Route exact path="/members" component = {Members} />
    <Route exact path="/contributors" component = {Contributors} />
    <Route exact path="/leaderboard" component = {Leaderboard} />
    <Route exact path="/profile" component = {Profile} />
    </Switch>
   </>
    );
};
export default App;
