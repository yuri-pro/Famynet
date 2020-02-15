import React from 'react';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";
import './App.css';

const App = ()=> {
  return (
    <div className="main">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
