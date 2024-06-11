import './App.css';

import React, { Component, Fragment } from 'react'
import NavBar from './components/NavBar';
import News  from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API

  state ={
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Fragment>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#C5AA6A'
        progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize}  key="general" country="in" category="general" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize}  key="entertainment" country="in" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize}  key="business" country="in" category="business" />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize}  key="general" country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize}  key="health" country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize}  key="science" country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize}  key="sports" country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize}  key="technology" country="in" category="technology" />} />
        </Routes>
        </Fragment>
        </Router>
      </div>
    )
  }
}

