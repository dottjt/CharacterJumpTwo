import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let AppTopDashboard = ({title, link, type}) => (
  <div className="App__top App__top__dashboard">
    <div className="App__top__item">
      <Link className="App__button" to={`/dashboard/characters/new`}>
        New Character
      </Link>
      <p className="App__top__tooltip" >
        Identify a new character.
      </p>
    </div>

    <div className="App__top__item">
      <Link className="App__button" to={`/dashboard/record`}>
        New Jump
      </Link>
      <p className="App__top__tooltip" >
        Record today's activity.
      </p>
    </div>

    <div className="App__top__item">
      <Link className="App__button" to={`/dashboard/journals/new`}>
        New Journal
      </Link>
      <p className="App__top__tooltip" >
        Write about something.
      </p>
    </div>
  </div>
)

export default AppTopDashboard
