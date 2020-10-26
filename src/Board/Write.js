import React, { Component } from 'react';

// simple list
class App extends Component {
    render() {
        return (
            <div>
                <h1>일단 게시판 글을 작성하는 곳입니다.</h1>
                <a href="App1">aaa </a><br/>
                <a href="App2">bbb </a><br/>
                <a href="App3">ccc </a><br/>
                <a href="App4">ddd </a><br/>
                <a href="App5">eee </a><br/>
                <a href="App6">fff </a><br/>
                <a href="list">게시판 </a><br/>
                <a href="Write">게시판 쓰기기능</a><br/>
            </div>
        );
    }
}

export default App;