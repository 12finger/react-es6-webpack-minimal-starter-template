import React, { Component } from 'react';
import Logo from './../components/Logo.jsx'; //Component with props but no state
import Counter from './../components/Counter.jsx';

export default class App extends Component {
    render() {
        return (
          <div className="app-container">
            <h2 id="heading">Hello Ioana</h2>

            <div className="some-content">
                <div className="child">
                    Contents
                </div>
                <div className="child">
                    more Contents
                </div>
                <div className="child">
                    even more Contents
                </div>
            </div>


            <div className="some-content">
                <div className="child">
                    Contents
                </div>
                <div className="child">
                    more Contents
                </div>
                <div className="child">
                    even more Contents
                </div>
            </div>


          </div>
        );
    }
}


// <Logo />
// <Counter />
