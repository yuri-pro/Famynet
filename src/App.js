import React from 'react';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";
import './App.css';
import Messages from "./Components/Messages/Messages";

const App = ()=> {
  return (
    <div className="main">
      <Header />
      <Sidebar />
      <div className="main__inner">
        {/* <Content /> */}
        <Messages />
      </div>
    </div>
  );
}

export default App;
