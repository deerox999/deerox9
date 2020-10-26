import React from 'react';
import logo from './logo.svg';
import './App.css';

import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          index에서 이걸 가져오는데, 컴포넌트 형식으로 개발할 수 있음.
        </a>

      </header>

        <body>
        <Alert variant="success">
            <Alert.Heading>안녕하세요. 홈페이지에 오신것을 환영해요.</Alert.Heading>
            <a
                className="App-link"
                href="https://www.naver.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                index에서 이걸 가져오는데, 컴포넌트 형식으로 개발할 수 있음.
            </a>

            <hr />

            <a
                className="mb-0"
                href="https://www.naver.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                이건 웹사이트형식 블로그입니다.
            </a>

        </Alert>
        </body>

    </div>
  );
}

export default App;