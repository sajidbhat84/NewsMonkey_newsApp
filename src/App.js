import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  pageSize= 6;
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/about" element={<News key="genera" pageSize={this.pageSize}country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize}country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainmen"pageSize={this.pageSize}country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News key="genera" pageSize={this.pageSize}country="in" category="general" />} />
            <Route exact path="/health" element={<News key="healt" pageSize={this.pageSize}country="in" category="health" />} />
            <Route exact path="/science" element={<News key="scienc" pageSize={this.pageSize}country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sport" pageSize={this.pageSize}country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize}country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}