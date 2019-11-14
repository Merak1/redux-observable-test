import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//TODO  (1.-) The action is getting imported from te actions folder
import { ping } from './actions/index'


//? Down here, app is calling {isPinging,ping} as props
let App = ({ isPinging, ping }) => (
  <div className="App">
    <div className="pong">
      <h1>is pinging: {isPinging.toString()}</h1>
      <button onClick={ping}>Start PING</button>
      {/*  (2.-)The onclick event triggers the ping ACTION we imported, dispatching it to the reducers  */}
      <p>This app whenever the button is pressed, it will change to true, then wait one second and change it back again to false </p>
    </div>

    <div className="App-header">
      <p>This app has 1 item  in the state the "is pinging" that is initialized as false <code>[ isPinging : false ].</code>
      </p>
      <p>The button has an action binded in a "onClick" event called {'{ping}'} </p>
      <p>This action is of type 'PING':  <code> [ type: 'PING' ] </code> </p>
      <p>When the action ping is dispatched into the reducers the reducer gets that </p>
      <p> whenever the type is 'PING' it returns : <code>
        [ case 'PING':
      return {'{isPinging: true }'}; ]
      </code>  </p>
      <p>Then the dispatched action gets into the Epic</p>
      <p>
        <code>
          export const pingEpic = action$ =>
             action$.pipe(
               ofType('PING'),//? Does the action was of tye 'PING', YES
               delay(1000), //?   Asynchronously wait 1000ms then continue
           mapTo({'{type: "PONG" }'}) //?  issues a new action of type 'PONG' dending it to reducers
);
      </code>
      </p>


    </div>
  </div>
);

App = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
  //TODO (3.-) 
  //? Here the 'ping' function that we got from action is connecting it and adding it to the props 
)(App);


export default App;
