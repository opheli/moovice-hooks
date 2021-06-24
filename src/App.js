import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Home from './component/Home'
import Weekly from './component/Weekly'
import WeeklyBattle from './component/WeeklyBattle'
import Popular from './component/Popular'
import PopularBattle from './component/PopularBattle'
import Favorites from './component/Favorites'

//import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Moovice</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="navbar-brand" to="/">Home</Link>
          <Link className="nav-link active" to="/weekly">Weekly</Link>
          <Link className="nav-link active" to="/weekly-battle">WeeklyBattle</Link>
          <Link className="nav-link active" to="/popular">Popular</Link>
          <Link className="nav-link active" to="/popular-battle">PopularBattle</Link>
          <Link className="nav-link active" to="/favorites">Favorites</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/weekly" component={Weekly} />
        <Route path="/weekly-battle" component={WeeklyBattle} />
        <Route path="/popular" component={Popular} />
        <Route path="/popular-battle" component={PopularBattle} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
