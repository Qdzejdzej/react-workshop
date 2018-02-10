import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home/Home.js'
import Table from './Table/Table.js'
import './App.css';

function App() {

  return (
        <BrowserRouter>
            <section>
              <h1>Hello DevMeetings!</h1>
                <nav>
                    <Link to="/">app</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/contacts">Contacts</Link>
                </nav>

                <Route path="/" component={Table}></Route>
                <Route path="/home" component={Home}></Route>
            </section>
        </BrowserRouter>
    )
}

export default App;
