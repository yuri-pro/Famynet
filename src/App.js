import React from 'react';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";
import './App.css';
import Messages from "./Components/Messages/Messages";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings"
import {BrowserRouter,Route} from "react-router-dom";

const App = ()=> {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Sidebar />
        <div className="main__inner">
          <Route path="/Content" component={Content} />
          <Route path="/Messages" component={Messages} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
