import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import introduce from './component/introduce';
import portFolio from './component/portFolio';
import App3 from './component/App3';
import App4 from './component/App4';
import App5 from './component/App5';
import joinUs from './component/joinUs';

import List from './Board/List';
import Write from './Board/Write';
import Read from './Board/Read';

import './Layout/Header.css';
import './Layout/Footer.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    render() {
        return (

            <Router>

                <nav>
                    <ul className="nav-container">
                        <li className="nav-item"><a href="introduce"> 개인소개 </a></li>
                        <li className="nav-item"><a href="portFolio"> 포트폴리오 </a></li>
                        <li className="nav-item"><a href="App3"> 추가메뉴3 </a></li>
                        <li className="nav-item"><a href="App4"> 추가메뉴4 </a></li>
                        <li className="nav-item"><a href="App5"> 추가메뉴5 </a></li>
                        <li className="nav-item"><a href="joinUs"> joinUs </a></li>
                    </ul>
                </nav>

                <body>
                    <div className="route">
                        <Route exact path="/" component={introduce}/>
                        <Route exact path="/introduce" component={introduce}/>
                        <Route exact path="/portFolio" component={portFolio}/>
                        <Route exact path="/App3" component={App3}/>
                        <Route exact path="/App4" component={App4}/>
                        <Route exact path="/App5" component={App5}/>
                        <Route exact path="/joinUs" component={joinUs}/>

                        <Route exact path="/list" component={List} />
                        <Route path="/read" component={Read} />
                        <Route path="/write" component={Write} />
                    </div>
                </body>

            </Router>
        );
    }
}

export default App;