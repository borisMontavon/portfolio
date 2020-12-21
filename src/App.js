import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Works from './components/works/Works';
import About from './components/about/About';

class App extends React.Component {

    render() {

        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/works" exact>
                        <Works />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;